import express from "express";
import * as functions from "firebase-functions";
import { iLikeTurtles } from "@acme/shared";
import { faker } from "@faker-js/faker";

const app = express();

app.get("*", (req, res) => {
  res.send({
    hello: "world",
    randomName: faker.person.firstName(),
    iLikeTurtles: iLikeTurtles(),
    nice: 69,
  });
});

export const server = functions.https.onRequest(app);
