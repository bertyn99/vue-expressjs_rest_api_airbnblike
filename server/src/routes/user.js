const express = require('express')
const db = require('../db/index')
const router = express.Router();

//lib
const bcrypt = require('bcrypt');

//model 
const User = require('../model/user');
const {registerValidation, loginValidation}= require('../model/validation')

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
  
  router.post("/signup", async (req, res) => {
    //validate data
   const {error}= registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
   
    //checking if user is already in the database
    const emailExist =0
   
    //encrypt le mot de passe
   await bcrypt.hash(req.body.password, 10, async function(err, hash) {
            // Store hash in your password DB.
            let user= new User(req.body.nom, req.body.prenom, req.body.telephone, req.body.email, hash, false)
           
           console.log(user); 

           //create new user
           let results = await db.newUser(user);
           res.json(results);  
           return user
        });
        
   /*  try { 
      console.log("tot")
      console.log(u);
      
  
    } catch (e) {
        console.log(e)
      res.sendStatus(500)
    } */
  
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