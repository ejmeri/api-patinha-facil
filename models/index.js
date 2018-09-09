const database = require('../config/mysql');

if(!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize'),
    sequelize = null
    
    sequelize = new Sequelize(database.database, database.username, database.password, database.params);

    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,


        User: sequelize.import(__dirname + '/user'),
        People: sequelize.import(__dirname + '/people')
    }

    global.db.User.hasMany(global.db.People);

}


module.exports = global.db;