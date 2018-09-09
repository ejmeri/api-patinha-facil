module.exports = {
    database: 'dbpet',
    username: 'root',
    password: '', 
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