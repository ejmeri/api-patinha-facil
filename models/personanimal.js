module.exports = function (sequelize, DataTypes) {
    return sequelize.define("PersonAnimal", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        animal_id: {
            type: DataTypes.BIGINT
        },
        person_type_id: {
            type: DataTypes.BIGINT
        },
        person_id: {
            type: DataTypes.BIGINT
        }
    });
};