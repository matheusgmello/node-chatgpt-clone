const express = require("express")
const promtController = require("../controllers/prompt-controller")

const routes = express.Router()

routes.post('/api/prompt', promtController.sendText)
module.exports = routes
//http//localhost:5001/api/prompt