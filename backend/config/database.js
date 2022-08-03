import sequelize from "sequelize";

const db = new sequelize('db_crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;

