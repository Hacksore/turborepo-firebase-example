import express from "express";
import * as functions from "firebase-functions";
import { MODULE_A, MODULE_B, FROM_THE_INDEX_FILE } from "shared/src";
import { INTERNAL_MODULE } from "./internal";

const app = express();

app.get("*", (req, res) => {
  res.send({
    hello: "world",
    modA: MODULE_A,
    modB: MODULE_B,
    fromIndex: FROM_THE_INDEX_FILE,
    internalA: INTERNAL_MODULE,
    newProp: "s",
    nice: 69,
  });
});

export const server = functions.https.onRequest(app);