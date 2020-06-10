const mariadb = require('mariadb');

const pool = mariadb.createPool({
     host: 'localhost', 
     database:'airbnb',
     user:'root', 
     password: '',
     connectionLimit: 5
});
pool.getConnection()
  
  let db={};
  db.all= ()=>{
        pool.getConnection()
        .then(conn => {
            console.log("connected ! connection id is " + conn.threadId);
            conn.release(); //release to pool
        })
        .catch(err => {
            console.log("not connected due to error: " + err);
        });
                
    }     

    db.createTable=()=>{
      pool.getConnection()
      .then(conn => {
        conn.query('SELECT * from tes').then(res => {
          console.log(res.map(r => r))
          rows= res.map(r => r)
      });

        conn.release(); //release to pool
      })
      .catch(err => {
          console.log("not connected due to error: " + err);
      });
      return rows
    };

    db.allUser=()=>{ 
          pool.query('SELECT * from users').then(res => {
            console.log(res.map(r => r))
            rows= res.map(r => r)
        })
        .catch(err => {
            console.log("not connected due to error: " + err);
        });
          return rows
        
    }
    
    db.newUser=(user)=>{ pool.getConnection()
      .then(conn => {
        conn.query(`INSERT INTO users (nom,prenom,tel,email,password,host) VALUES ('${user.nom}','${user.prenom}',${user.tel},'${user.email}','${user.password}',${user.host})`).then(res => {
          
      }).catch(err => {
            //handle error
            console.log("error insert due to"+err); 
            conn.end();
          });
          return `${user.nom} a bien été crée"`
        conn.release(); //release to pool
      })
      .catch(err => {
          console.log("the new user wasnt created due to: " + err);
      });

    };
    db.getUser=(id)=>{
     
        pool.query(`SELECT * FROM users WHERE iduser = ${id}`).then(res => {
          console.log(res.map(r => r))
          rows= res
      }).catch(err => {
            //handle error
            console.log("error Get user due to"+err); 

          });
       return rows
       
    }

    db.updateUser=(id)=>{pool.getConnection()
      .then(conn => {
        conn.query(`INSERT INTO users (nom,prenom,tel,email,password,host) VALUES ('${user.nom}','${user.prenom}',${user.tel},'${user.email}','${user.password}',${user.host})`).then(res => {
          
      }).catch(err => {
            //handle error
            console.log("the new user wasnt update due to:"+err); 
            conn.end();
          });
          return `${user.nom} a bien été crée"`
        conn.release(); //release to pool
      })
      .catch(err => {
          console.log("the new user wasnt connected due to: " + err);
      });

    }
  module.exports= db