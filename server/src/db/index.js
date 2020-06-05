const mariadb = require('mariadb');

const pool = mariadb.createPool({
     host: 'localhost', 
     database:'airbnb',
     user:'root', 
     password: '',
     connectionLimit: 10
});
async function asyncFunction() {
    let conn;
    try { 
      conn = await pool.getConnection();
	const rows = await conn.query("SELECT 1 as val");
	console.log(rows); //[ {val: 1}, meta: ... ]
      const res = await conn.query("SELECT * ");
      console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
  }

  
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
    }
    db.addUser=()=>{

    }
    db.user=(userid)=>{

    }

    db.updateUser=(userid)=>{

    }
  module.exports= db