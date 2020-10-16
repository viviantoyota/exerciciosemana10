const express = require("express")
const app = express()
const router = require("./routes/gamesRoutes")

app.use("/", router)

module.exports = app