import express from "express";
import * as functions from "firebase-functions";
import { iLikeTurtles } from "shared/util";

const app = express();

app.get("*", (req, res) => {
  res.send({
    hello: "world",
    iLikeTurtles: iLikeTurtles,
    nice: 69,
  });
});

export const server = functions.https.onRequest(app);
