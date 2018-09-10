const database = require('../config/mysql');

if(!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize'),
    sequelize = null
    
    sequelize = new Sequelize(database.database, database.username, database.password, database.params);

    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,


        User: sequelize.import(__dirname + '/user'),
        Person: sequelize.import(__dirname + '/person/person'),
        Gender: sequelize.import(__dirname + '/animal/gender'),
        Specie: sequelize.import(__dirname + '/animal/specie'),
        Breed: sequelize.import(__dirname + '/animal/breed'),
        Coat: sequelize.import(__dirname + '/animal/coat'),
        Care: sequelize.import(__dirname + '/animal/care'),
        Animal: sequelize.import(__dirname + '/animal/animal'),
        Contact: sequelize.import(__dirname + '/person/contact'),
        AnimalImage: sequelize.import(__dirname + '/animal/animalimage'),
        PersonType: sequelize.import(__dirname + '/person/persontype'),
        PersonAnimal: sequelize.import(__dirname + '/personanimal'),
        State: sequelize.import(__dirname + '/address/state'),
        City: sequelize.import(__dirname + '/address/city'),
        Ddd: sequelize.import(__dirname + '/address/ddd'),
        Address: sequelize.import(__dirname + '/person/address'),
        Adoption: sequelize.import(__dirname + '/adoption'),
    }

    global.db.PersonAnimal.hasMany(global.db.Adoption);
    global.db.Person.hasMany(global.db.Address);
    global.db.Ddd.hasMany(global.db.Address);
    global.db.State.hasMany(global.db.Ddd);
    global.db.State.hasMany(global.db.City);
    global.db.PersonType.hasMany(global.db.PersonAnimal);
    global.db.Person.hasMany(global.db.PersonAnimal);
    global.db.Animal.hasMany(global.db.PersonAnimal);
    global.db.Person.hasMany(global.db.Contact);
    global.db.User.hasMany(global.db.Person);
    global.db.Specie.hasMany(global.db.Breed);
    global.db.Breed.hasMany(global.db.Animal);
    global.db.Gender.hasMany(global.db.Animal);
    global.db.Coat.hasMany(global.db.Animal);
    global.db.Care.hasMany(global.db.Animal);
    global.db.Animal.hasMany(global.db.AnimalImage);

}


module.exports = global.db;