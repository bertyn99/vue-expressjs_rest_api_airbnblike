const mariadb = require('mariadb');

const pool = mariadb.createPool({
     host: 'localhost', 
     database:'airbnb',
     user:'root', 
     password: '',
     connectionLimit: 5
});

  
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
      pool.getConnection()
      .then(conn => {
        conn.query('SELECT * from users').then(res => {
          console.log(res.map(r => r))
          rows= res.map(r => r)
      });

        conn.release(); //release to pool
      })
      .catch(err => {
          console.log("not connected due to error: " + err);
      });
      return rows
    }
 
    
    db.addUser=()=>{

    }
    db.getuser=(userid)=>{

    }

    db.updateUser=(userid)=>{

    }
  module.exports= db