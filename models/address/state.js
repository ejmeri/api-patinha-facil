module.exports = function (sequelize, DataTypes) {
    return sequelize.define("State", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING(2),
            allowNull: false
        }
    });
};