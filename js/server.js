const db = require('./datastorage.js');
const express = require('express');
const app = express();
const port = 3000;
const httpServer = require('http').Server(app);

const server = {
    connectToDB: () => {
        return new Promise((resolve, reject) => {
            db.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve("Connected to DB");
                }
              });
        });
    },
    disconnectToDB: () => {
        return new Promise((resolve, reject) => {
            db.disconnect((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve("Disconnected to DB");
                }
              });
        });
    }, 
    getApp: () => {
        return app;
    },
    getDB: () => {
        return db;
    },
    startServer: () => {
        const externalRoutes = require('./routes.js');
        app.use('/', externalRoutes);
        httpServer.listen(port, () => {
            var host = httpServer.address().address;
            var port = httpServer.address().port;
            console.log('Server started on port ' + port);
            console.log("http://%s:%s", host, port);
        });
    }
}

module.exports = server;
