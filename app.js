const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const rootDir = require("./util/path");

//router
const commingSoonRoutes = require("./routes/comming-soon");
const notFoundController = require("./controllers/not-found");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, "public")));

app.use(commingSoonRoutes);
app.use(notFoundController.get404Page);

app.listen(3000);
