module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Adption", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        whyadopted : {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        adopted_id :{ 
            type: DataTypes.BIGINT ,
            allowNull: false
        },
        person_animal_id : { type: DataTypes.BIGINT }
    });
};