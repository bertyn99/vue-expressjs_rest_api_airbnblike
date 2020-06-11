const mysql = require('mysql');

const pool= mysql.createPool({
    connectionLimit: 5,
    host: 'localhost', 
     database:'airbnb',
     user:'root', 
     password: ''
 
});

let db={};
db.allUser= ()=>{
    return new Promise((resolve,reject) =>{
        pool.query('SELECT * from users', (err, result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.newUser= (user)=>{
    return new Promise((resolve,reject) =>{
        pool.query('INSERT INTO users (nom,prenom,tel,email,password,host) VALUES (?,?,?,?,?,?)',[user.nom, user.prenom, user.tel, user.email,user.password,user.host], (err, result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.getUser= (id)=>{
    return new Promise((resolve,reject) =>{
        pool.query('SELECT * from users WHERE iduser = ?',[id], (err, result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.updateUser= (id)=>{
    return new Promise((resolve,reject) =>{
        pool.query('SELECT * from users WHERE iduser = ?',[id], (err, result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result)
        });
    });
};

db.newRealEstate= (good)=>{
    return new Promise((resolve,reject) =>{
        pool.query('INSERT INTO goods (nom,prenom,tel,email,password,host) VALUES (?,?,?,?,?,?)',[good.nom, good.prenom, good.tel, good.email,good.password,good.host], (err, result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.getRealEstate= ()=>{
    return new Promise((resolve,reject) =>{
        pool.query('SELECT * from users WHERE iduser = ?',[id], (err, result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.updateRealEstate= (good)=>{
    return new Promise((resolve,reject) =>{
        pool.query('INSERT INTO goods (nom,prenom,tel,email,password,host) VALUES (?,?,?,?,?,?)',[good.nom, good.prenom, good.tel, good.email,good.password,good.host], (err, result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result)
        });
    });
};
db.getAllRealEstate= ()=>{
    return new Promise((resolve,reject) =>{
        pool.query('SELECT * from realEstate', (err, result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result)
        });
    });
};


module.exports=db;