const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'codeexp2021web',
    port: "3306",
});

const database = {
    connect: (callback) => {
        return connection.connect(callback);
    },
    disconnect: (callback) => {
        return connection.end(callback);
    },
    login: (vars, callback) => {
        return connection.query('select * from user where username = \'' + vars.username + '\' and password = \'' + vars.password + '\';', callback);
    },
};

module.exports = database;