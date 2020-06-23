const express = require('express')
const db = require('../db/index')
const router = express.Router();


//
router.get("/goods/", async (req, res) => {
    try {
      let results = await db.getAllRealEstate();
      res.json(results);
  
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  
  });


  //renvoie les info de l’annonce avec l’id correspondant
router.get("/goods/:id", async (req, res) => {
    try {
      let results = await db.getRealEstate(parseInt(req.params.id));
      res.json(results[0]);
  
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  
  });
  
  //renvoie les info d'une annonce d'un user correspondant
  router.get("/users/:userid/goods/:id", async (req, res) => {
    try {
      
      let results = await db.getRealEstateOfUser(parseInt(req.params.userid),parseInt(req.params.id));
      res.json(results);
  
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  
  });

  //renvoie les info des annonces d'un user
  router.get("/users/:userid/goods/", async (req, res) => {
    try {
     
      let results = await db.getAllRealEstateOfUser(parseInt(req.params.userid));
      res.json(results);
  
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  
  });
  
  //créer un annonce
  router.post("/users/:id/goods/new", async (req, res) => {
    try {
      const address = new Localisation(req.body.city, req.body.streetaddress, req.body.road, req.body.code, req.body.details);
      const estate = new Good(parseInt(req.params.id), req.body.name, req.body.place, req.body.description, req.body.pricePp, address)
  
  
      let results = await db.newRealEstate(estate);
      res.json(results);
  
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  });

  //mettre a jour les info de l'annonce avce l'id correspondant
  router.put("/:id/goods/:id", async (req, res) => {
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
          console.log(req.params.id)
       let results = await db.updateRealEstate(form,parseInt(req.params.id));
      res.json(results); 
  
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  
  });
  module.exports =router;
  