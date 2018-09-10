module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Contact", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        person_id: {
            type: DataTypes.BIGINT
        }
    });
};