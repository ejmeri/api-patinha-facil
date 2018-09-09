module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Address", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255)
        },
        number: {
            type: DataTypes.STRING(11),
            allowNull: false
        },
        place: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        complement: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        cep: {
            type: DataTypes.STRING(9),
            allowNull: false
        },
        person_id : { type: DataTypes.BIGINT },
        ddd_id : { type: DataTypes.BIGINT }
    });
};