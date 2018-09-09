module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Ddd", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        region: {
            type: DataTypes.STRING(120),
            allowNull: false
        },
        state_id: {
            type: DataTypes.BIGINT
        }
    });
};