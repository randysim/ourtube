import Express from "express";
import * as DotEnv from "dotenv";
import * as Cors from "cors";
import { json, urlencoded } from "body-parser";

DotEnv.config();

const app = Express();

/* MIDDLEWARE */
app.use(Cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.listen(80, () => {
    console.log("Listening on Port 80");
});

