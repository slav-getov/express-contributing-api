const express = require("express");
const bodyParser = require("body-parser");
const feedRoutes = require("./routes/feed.js");

const app = express();
app.use(bodyParser.json());
app.use("/feed", feedRoutes);
const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`Example app is listening on port ${port}.`)
);
