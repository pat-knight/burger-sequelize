const connection = require("./config/connection");
const routes = require("./controllers/burgersController");

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {
console.log(`app listening on port ${PORT}`);
});

