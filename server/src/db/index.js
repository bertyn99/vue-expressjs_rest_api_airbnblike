const mysql = require('mysql');
const dotenv =require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    database: 'airbnb',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD

});

let db = {};
db.getUserMailIfExist = (data) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from users  WHERE email = ?',[data], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result)
        });
    });
};

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
<<<<<<< HEAD
        pool.query('INSERT INTO users (nom,prenom,tel,email,password) VALUES (?,?,?,?,?)', [user.nom, user.prenom, user.tel, user.email, user.passwd], (err, result) => {
=======
        pool.query('INSERT INTO users (nom,prenom,tel,email,password,imgUrl,host) VALUES (?,?,?,?,?,NULL,?)', [user.nom, user.prenom, user.tel, user.email, user.passwd, user.host], (err, result) => {
>>>>>>> c1db01a25a8014f62d90c0b513674cc5e82160c5
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
db.updateUser = (user,id) => {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE users SET ?  WHERE iduser = ?', [user,id], (err, result) => {
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
        pool.query('INSERT INTO realEstate (idhost,name,nbrPlace,description,imgUrl,pricePp) VALUES (?,?,?,?,,?);', [good.idhost, good.name, good.nbrPlace, good.description, good.imgUrl, good.pricePp], (err, result) => {
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
db.getRealEstateOfUser = (userid,id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from realEstate WHERE idhost = ? AND id=?', [userid,id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.getAllRealEstateOfUser = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from realEstate WHERE idhost = ?', [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.updateRealEstate = (good,id) => {
    return new Promise((resolve, reject) => {
         const sel= `SELECT id FROM realestate WHERE  id={good.pricePp} AND pricePp=$`
         
        if (good.name || good.prenom || good.nbrPlace|| good.description|| good.imgUrl || good.pricePp) {
            pool.query('UPDATE realEstate SET ?  WHERE id = ?'
            , [good,id], (err, result) => {


                if (err) {
                    return reject(err);
                }
                resolve(result)
            });
        } else {
            
        pool.query('UPDATE localisation SET ?  WHERE id = ?', [good,id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result)
            });
        }
        

            
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