import { iLikeTurtles } from "@acme/shared";
import { onRequest } from "firebase-functions/v2/https";
import { faker } from "@faker-js/faker";
import express from "express";

const app = express();

app.get("*", (_req, res) => {
  res.send({
    hello: "world",
    randomName: faker.person.firstName(),
    iLikeTurtles: iLikeTurtles(),
    nice: 69,
  });
});

export const server = onRequest(app);
