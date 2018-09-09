module.exports = function (sequelize, DataTypes) {
    return sequelize.define("AnimalImage", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        animal_id : { type: DataTypes.BIGINT }
    });
};