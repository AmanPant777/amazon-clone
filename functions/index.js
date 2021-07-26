const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51J2V4SSICqf3Ddj69YAO9JGR9n74IrijgNKwlunyzgxpH2yiqRlPdFLLnO2OgYH1NJLKz5mAeiMlZIoPoTpPNyw400zNprr1V3"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Progress in payment=>>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
