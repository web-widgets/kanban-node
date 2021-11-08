/* eslint-disable @typescript-eslint/no-var-requires */
import { dbCreateConnection } from "typeorm/dbConnection";
import dotenv from 'dotenv';
const express = require("express");
const cors = require("cors");
const path = require("path");

import routes from './routes';

dotenv.config({ path: path.join(__dirname, "../.env") });


(async () => {
    await dbCreateConnection();
})();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
