import express from "express";
import * as functions from "firebase-functions";

const app = express();

app.get("*", (req, res) => {
  res.send({
    hello: "world",
  });
});

export const server = functions.https.onRequest(app);
