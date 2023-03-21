const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const n = req.query.n;

  if (!n) {
    res.render("index");
    return;
  }

  const locals = { n };
  res.render("index", locals);
});
app.listen(3000, () => console.log("Example app is listening on port 3000."));
