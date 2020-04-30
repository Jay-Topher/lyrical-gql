const express = require("express");
const models = require('./models')
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config()
const schema = require('./schema/schema')

const app = express();

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", mongoConnected);
mongoose.connection.on("disconnected", mongoDisconnected);
mongoose.connection.on("error", mongoError);

app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

function mongoConnected() {
  console.log("MongoDB connected successfully");
}

function mongoDisconnected(reason) {
  console.log("MongoDB disconnected - %o", reason);
}

function mongoError(err) {
  console.error("Mongo Error", err);
}

module.exports = app;
