module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Breed", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        specie_id: {
            type: DataTypes.BIGINT
        }
    });
};