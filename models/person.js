module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Person", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(120),
			allowNull: false
        },
		nickname: {
			type: DataTypes.STRING(45)
		},
		cpfcnpj: {
            type: DataTypes.STRING(14),
            allowNull: false
        },
        user_id: {
            type: DataTypes.BIGINT
        }
    });
};