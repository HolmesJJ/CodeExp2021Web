const server = require('./server.js');
const db = server.getDB();

const management = {
    login: (vars) => {
        return new Promise((resolve, reject) => {
            db.login(vars, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
};

module.exports = management;