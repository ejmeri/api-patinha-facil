module.exports = {
    database: 'db_pet',
    username: 'root',
    password: 'root', 
    params: {
        host:  'localhost',
        port: '3306',
        dialect: "mysql",
        define: {
            underscored: true,
            freezeTableName: true,
        }
    }
}