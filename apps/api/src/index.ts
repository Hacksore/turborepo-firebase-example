import express from "express";
import * as functions from "firebase-functions";
import { sanitizeName } from "shared/util";

const app = express();

app.get("*", (req, res) => {
  res.send({
    name: sanitizeName("I like turtles"),
    time: Date.now(),
    origin: req.hostname
  });
});

export const server = functions.https.onRequest(app);
