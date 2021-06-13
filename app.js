var server = require('./js/server.js');
server.startServer();

server.connectToDB()
    .then(dbConnectionSuccess)
    .catch(errorHandler);

function dbConnectionSuccess(message) {
    console.log(message);
};

function errorHandler(err) {
    console.log(err);
};