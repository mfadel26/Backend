const engineerModel = require('../models/engineer')

module.exports = {
    createEngineer: async(req, res) => {
        try{
            const result = await engineerModel.createEngineer(req.body)
            res.send(result)
        }catch(error) {
           
            res.send(error)
        }
    },
    readEngineer: async(req, res) => {
        try{
            const result = await engineerModel.readEngineer()
            res.send(result)
        }catch(error) {
           
            res.send(error)
        }
    },
    readEngineerby: async(req, res) => {
        let user = req.params.id
        
        try{
            const result = await engineerModel.readEngineerby(user)
            res.send(result)
        }catch(error) {
          
            res.send(error)
        }
    },
    updateEngineer: async(req, res) => {
        try{
            const result = await engineerModel.updateEngineer(req.body, req.params)
            res.send(result)
        }catch(error) {
           
            res.send(error)
        }
    },
    deleteEngineer: async(req, res) => {
        try{
            const result = await engineerModel.deleteEngineer(req.params)
            res.send(result)
        }catch(error) {
            
            res.send(error)
        }
    },
    searchEngineer: async(req, res) => {
        try{
            const result = await engineerModel.searchEngineer(req.query)
            
            res.send(result)
        }catch(error) {
           
            res.send(error)
        }
    }
}