/* eslint-disable @typescript-eslint/no-var-requires */
import { dbCreateConnection } from "typeorm/dbConnection";
import dotenv from 'dotenv';
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

import routes from './routes';

dotenv.config({ path: path.join(__dirname, "../.env") });

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

(async () => {
    await dbCreateConnection();
})();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

const port = process.env.PORT || 3000;
const serverUrl = process.env.APP_SERVER_URL || `http://localhost:${port}`;

app.post("/uploads", upload.single("upload"), async (req, res) => {
    try {
        const { file } = req;
        const fullPath = `${serverUrl}/${file.path}`;

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
