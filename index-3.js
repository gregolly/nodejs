const express = require("express");

const app = express();

app.listen("3000");

app.use(express.json())

app.route("/").post((req, res) => {
    const { nome, cidade } = req.body
    res.send(`Meu nome e ${nome} e minha cidade e ${cidade}`)
})

