const express = require('express')
const db = require('../db/index')
const router = express.Router();

//auth
const verify = require('./verifytoken')

//lib
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')
const dotenv =require('dotenv')

//model 
const User = require('../model/user');
const {registerValidation, loginValidation}= require('../model/validation')


dotenv.config();

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
    const emailExist = await db.getUserMailIfExist(req.body.email)
   console.log(emailExist)
    if(emailExist.length ==1 ) return res.status(400).send('Email already exist')
    //encrypt le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

 /*   await bcrypt.hash(req.body.password, 10, async function(err, hash) {
            // Store hash in your password DB.
            

           //create new user
           let results = await db.newUser(user);
           
           return user
        });
         */
     try { 
      let user= new User(req.body.nom, req.body.prenom, req.body.telephone, req.body.email, hashedPassword, false)
      let results = await db.newUser(user);  
      console.log(results);       
      res.json(results);  
    } catch (e) {
      console.log(e); 
      res.sendStatus(500)
    } 
  
  });
  
  router.post('/login', async (req, res)=> {
    //validate data
    const {error}= loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
  
    //checking if user email is already in the database
    const userExist = await db.getUserMailIfExist(req.body.email)   
  
    if(userExist.length ==0 ) return res.status(400).send('Email doesnt exist')
  
    //PASSWORD is correct
    const validPass =  await bcrypt.compare(req.body.password, userExist[0].password);

    if(!validPass) return res.status(400).send('Invalid password')
   
    //Create and assign a token 
    const token = jwt.sign({id: userExist[0].iduser}, process.env.TOKEN_SECRET)
    res.header('Auth-token', token);
    res.send('Logged in')
  });

  router.put("/:id", verify, async (req, res) => {
    console.log('t')
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