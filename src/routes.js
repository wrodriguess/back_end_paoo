const express = require('express')
const knex = require('./database')

const routes = express.Router()

const RecommendationController = require('./controllers/RecommendationController')

routes.post('/create', RecommendationController.create)
routes.get('/getAll', RecommendationController.getAll)

module.exports = routes