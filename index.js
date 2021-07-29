/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const Datastore = require("nedb-promises");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads");
	},
	filename: function (req, file, cb) {
		const ext = path.extname(file.originalname);
		cb(null, `${Date.now()}${ext}`);
	},
});
const upload = multer({
	storage,
	fileFilter: function (_req, _file, callback) {
		callback(null, true);
	},
	limits: {
		fileSize: 1024 * 1024,
	},
});

const cardsData = require("./data/cards.json");
let order;
const cards = new Datastore();
cards.insert(cardsData).then(c => {
	order = c.map(card => card._id);
});

const stages = new Datastore();
stages.insert(require("./data/stages.json"));

const swimlanes = new Datastore();
swimlanes.insert(require("./data/swimlanes.json"));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
const host = process.env.HOST || "http://localhost";

const cardFields = [
	"label",
	"status",
	"description",
	"progress",
	"users",
	"endDate",
	"cover",
	"image",
	"sprint",
	"stage",
	"team",
	"id",
	"_id",
];

function getCardFields(card) {
	return Object.keys(card)
		.filter(key => cardFields.includes(key))
		.reduce((acc, key) => {
			acc[key] = card[key];
			return acc;
		}, {});
}

app.get("/cards", async (req, res) => {
	try {
		const data = await cards.find({});
		const dataMap = data.reduce((cards, card) => {
			cards[card._id] = { ...card, id: card._id };
			// add demo image
			if (card.image && card.image === "demo.jpg") {
				cards[card._id].image = `${host}:${port}/uploads/${card.image}`;
			}
			return cards;
		}, {});

		res.send(order.map(id => dataMap[id]));
	} catch (error) {
		res.send({ status: "err", error });
	}
});
app.post("/cards", async (req, res) => {
	try {
		const { overCardId } = req.body;
		const card = getCardFields(req.body);

		const data = await cards.insert(card);

		if (overCardId) {
			order = order.filter(cardId => cardId !== id);
			const overCardIndex = order.findIndex((v) => v === overCardId);

			order.splice(overCardIndex, 0, card.id);
		} else {
			order.push(data._id);
		}

		res.send({ status: "ok", id: data._id });
	} catch (error) {
		res.send({ status: "err", error });
	}
});
app.put("/cards/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const card = getCardFields(req.body);

		await cards.update({ _id: id }, { $set: { ...card } });

		res.send({ status: "ok" });
	} catch (error) {
		res.send({ status: "err", error });
	}
});
app.put("/cards/:id/move", async (req, res) => {
	try {
		const id = req.params.id;
		const { overCardId, ...rest } = req.body;

		const card = getCardFields(rest);
		await cards.update({ _id: id }, { $set: { ...card } });

		order = order.filter(cardId => cardId !== id);

		if (overCardId) {
			const overCardIndex = order.findIndex(v => v === overCardId);
			order.splice(overCardIndex, 0, id);
		} else {
			order.push(id);
		}

		res.send({ status: "ok" });
	} catch (error) {
		res.send({ status: "err", error });
	}
});
app.delete("/cards/:id", async (req, res) => {
	try {
		const id = req.params.id;

		if (id) {
			await cards.remove({ _id: id });
			order = order.filter(cardId => cardId !== id);
			res.send({ status: "ok" });
		}
	} catch (error) {
		res.send({ status: "err", error });
	}
});

app.get("/stages", async (req, res) => {
	try {
		const data = await stages.find({});
		res.send(data[0]);
	} catch (error) {
		res.send({ status: "err", error });
	}
});
app.post("/stages", async (req, res) => {
	try {
		const stagesFind = await stages.find({});
		const stagesConfig = stagesFind[0];

		const { label, id } = req.body;
		const serverId = `sid${id}`;
		stagesConfig.options.push({ label, id: serverId });

		await stages.update({ id: "stages" }, { $set: stagesConfig })

		res.send({ status: "ok", id: serverId });
	} catch (error) {
		console.log("err", error)
		res.send({ status: "err", error: JSON.stringify(error) });
	}
});
app.put("/stages/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const { label } = req.body;
		const stagesConfig = await stages.find({});
		const options = stagesConfig[0].options.map(stage => {
			if (stage.id === id) {
				return { ...stage, label };
			}
			return stage;
		});

		await stages.update({ "options.id": id }, { $set: { options } });

		res.send({ status: "ok" });
	} catch (error) {
		res.send({ status: "err", error });
	}
});
app.get("/swimlanes", async (req, res) => {
	try {
		const data = await swimlanes.find({});
		res.send(data[0]);
	} catch (error) {
		res.send({ status: "err", error });
	}
});
app.post("/swimlanes", async (req, res) => {
	try {
		const swimlanesFind = await swimlanes.find({});
		const swimlanesConfig = await swimlanesFind[0];

		const { label, id } = req.body;
		const serverId = `sid${id}`;

		swimlanesConfig.options.push({ label, id: serverId });

		await swimlanes.update({ id: "swimlanes" }, { $set: swimlanesConfig })

		res.send({ status: "ok", id: serverId });
	} catch (error) {
		res.send({ status: "err", error });
	}
});
app.put("/swimlanes/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const { label } = req.body;
		const swimlanesConfig = await swimlanes.find({});

		const options = swimlanesConfig[0].options.map(swimlane => {
			if (swimlane.id === id) {
				return { ...swimlane, label };
			}
			return swimlane;
		});
		await swimlanes.update({ "options.id": id }, { $set: { options } });

		res.send({ status: "ok" });
	} catch (error) {
		res.send({ status: "err", error });
	}
});

app.post("/uploads", upload.single("upload"), async (req, res) => {
	try {
		const { file } = req;
		const fullPath = `${host}:${port}/${file.path}`;

		res.send({ status: "ok", path: fullPath, id: file.filename });
	} catch (error) {
		res.send({ status: "err", error });
	}
});

app.get("/uploads/:file", function (req, res) {
	try {
		const filename = req.params.file;
		res.sendFile(`${__dirname}/uploads/${filename}`);
	} catch (error) {
		res.send({ status: "err", error });
	}
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
