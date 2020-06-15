const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    database: 'airbnb',
    user: 'root',
    password: ''

});

let db = {};
db.allUser = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from users', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.newUser = (user) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO users (nom,prenom,tel,email,password,host) VALUES (?,?,?,?,?,?)', [user.nom, user.prenom, user.tel, user.email, user.password, user.host], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.getUser = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from users WHERE iduser = ?', [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.updateUser = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from users WHERE iduser = ?', [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result)
        });
    });
};

db.newRealEstate = (good) => {
    return new Promise((resolve, reject) => {
        const sel = `(SELECT id FROM realestate WHERE name='${good.name}' AND idhost=${good.idhost} AND pricePp=${good.pricePp})`
        pool.query('INSERT INTO realEstate (idhost,name,nbrPlace,description,pricePp) VALUES (?,?,?,?,?);', [good.idhost, good.name, good.nbrPlace, good.description, good.pricePp], (err, result) => {
                if (err) {
                    return reject(err);
                }
                 resolve(result)
            });
         pool.query('INSERT INTO localisation (idestate,city,streetaddress,road,code,details) VALUES ('+sel+',?,?,?,?,?)', [good.addresse.city, good.addresse.streetaddress, good.addresse.road, good.addresse.code, good.addresse.details] , (err, result) => {

            if (err) {
                return reject(err);
            }
             return resolve(result)
        });
         
    });
};
db.getRealEstate = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from realEstate WHERE id = ?', [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.getRealEstateOfUser = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from realEstate WHERE idhost = ?', [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.updateRealEstate = (good) => {
    return new Promise((resolve, reject) => {
        /*  const sel= `SELECT id FROM realestate WHERE name=\'${good.name}\' AND idhost=${good.idhost} AND pricePp=${good.pricePp}`
         */
        pool.query('INSERT INTO realEstate (idhost,name,nbrPlace,description,pricePp) VALUES (?,?,?,?,?,?);\n' +
            'INSERT INTO location (city,streetaddress,road,code,details) VALUES (?,?,?,?,?)', [good.idhost, good.name, good.nbrPlace, good.description, goodpriceRp, sel, good.streetaddress, good.road, good.code, good.details], (err, result) => {


                if (err) {
                    return reject(err);
                }
                return resolve(result)
            });
    });
};
db.getAllRealEstate = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from realEstate', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result)
        });
    });
};


module.exports = db;