import express from "express";
import * as functions from "firebase-functions";
import { MODULE_A, MODULE_B } from "shared";
import { INTERAL_MODULE } from "./internal";

const app = express();

app.get("*", (req, res) => {
  res.send({
    hello: "world",
    modA: MODULE_A,
    modB: MODULE_B,
    internalA: INTERAL_MODULE,
    nice: 69,
  });
});

export const server = functions.https.onRequest(app);
