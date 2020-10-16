  
const express = require('express')
const router = express.Router()
const controller = require('../controllers/gamesController')
const cors = require('cors')

router.put("/games/:name", cors(), controller.atualizar)
router.patch("/games/:name", cors(), controller.update)
router.put("/games/:company", cors(), controller.atualizarCompanyporId)
router.patch("/games/:company", cors(), controller.updateCompany)


module.exports = router