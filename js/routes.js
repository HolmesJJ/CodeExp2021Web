const express = require('express');
const server = require('./server.js');

const management = require('./management.js');

module.exports = (() => {
    const externalRoutes = require('express').Router();
    
    externalRoutes.use(express.json());
    externalRoutes.use(express.urlencoded({
        extended: true
    }));
    
    externalRoutes.get('/js/*', (req, res) => {
        res.sendFile(req.originalUrl, {'root': './'});
    });

    externalRoutes.get('/', (req, res)=> {
        res.send("Hello World!");
    });

    externalRoutes.post('/login', (req, res) => {
        var vars = req.body;
        management.login(vars)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });
    
    return externalRoutes;
})();