const db = require('../models');

module.exports = {
    findAll: function(req, res){
        db.User.findAll({})
            .then(dbData => res.json(dbData))
            .catch(err => res.send(err))
    },
    login: function(req, res){

    }
}