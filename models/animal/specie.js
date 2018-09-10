module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Specie", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(5),
            allowNull: false
        }
    });
};