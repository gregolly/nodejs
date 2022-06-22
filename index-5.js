const express = require("express");

const app = express();

app.listen("3000");

app.route("/").get((req, res) => console.log(req.query.nome))

app.route("/about/user").get((req, res) => console.log(req.query))
