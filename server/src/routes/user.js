const express = require('express')
const db = require('../db/index')
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
      let results = await db.allUser();
      res.json(results);
  
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  
  });
  router.get("/:id", async (req, res) => {
    let results
    try {
      results = await db.getUser(parseInt(req.params.id));
      console.log(results[0])
      if (results.length == 0) res.status(404).send('The user with given Id was not found');
      res.json(results[0]);
      //if result!
    } catch (e) {
      /* console.log(e)
      res.status(404).send('The user with given Id was not found') */
    }
  
  });
  
  router.post("/new", async (req, res) => {
    try {
      const user = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        tel: req.body.telephone,
        email: req.body.email,
        password: req.body.password,
        host: false
      }
      console.log(req.body)
      let results = await db.newUser(user);
      console.log(results)
      res.json(results);
  
    } catch (e) {
      res.sendStatus(500)
    }
  
  });
  router.put("/:id", async (req, res) => {
     try {
     
      let form=[]
      for (const property in req.body) {
        if(req.body[property]){
          var ob=JSON.parse(`{ "${property}" : "${req.body[property]}" }`)
          form.push(ob)
        }}
      
        form= form.reduce(function(result, item) {
            var key = Object.keys(item)[0]; //first property: a, b, c
            result[key] = item[key];
            return result;
          }, {});
        
  
        let results = await db.updateUser(form,parseInt(req.params.id));
        console.log(results)
        res.json(results); 
    
    } catch (e) {
       res.sendStatus(500) 
    } 
  
    
  });
module.exports =router;