module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Care", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    });
};