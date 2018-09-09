module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Animal", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        birthday: {
            type: DataTypes.STRING(25),
        },
        weight: {
            type: DataTypes.DOUBLE
        },
        castrated : {
            type: DataTypes.BOOLEAN
        },
        Adopted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        breed_id: { type: DataTypes.BIGINT },
        care_id: { type: DataTypes.BIGINT },
        gender_id: { type: DataTypes.BIGINT },
        coat_id: { type: DataTypes.BIGINT }
    });
};