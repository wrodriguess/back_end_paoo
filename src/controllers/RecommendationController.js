const knex = require('../database')

module.exports = {
    async create(req, res){
        try{
            const {description} = req.body
            await knex('recommendation').insert({description})
            return res.status(201).json()
        }catch(error){
            next(error)
        }
    },
    async getAll(req, res){
        try{
            const results = await knex('recommendation').orderBy('created_at', 'desc')
            return res.status(200).json(results) 
        }catch(error){
            next(error)
        }
    }
}