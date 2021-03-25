const express = require("express");
const path = require("path");
const app = express();
const exphbs = require("express-handlebars");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

//Temptate engine
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});



app.get("/regiter", (req, res) => {
  res.render("regiter");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/introduce", (req, res) => {
  res.render("introduce");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
