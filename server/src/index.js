const express = require("express");
const app = express();
const db = require('./db/index')
const cors = require('cors')
const bodyParser = require('body-parser');
const multer = require('multer');


//Model
const Good = require('./model/good');
const Localisation = require('./model/localisation')

//Routes
const userRoute = require('./routes/user');
const goodsRoute = require('./routes/goods')

app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/api/", (req, res) => {
  res.send("Accueil");
});

app.post("/api/search", (req, res) => {
  res.send(req.query);
});


//user route
app.use('/api/users/', userRoute);



//goods route
app.use('/api/', goodsRoute);



app.get("/api/location/:year/:month", (req, res) => {
  res.send(req.params);
});




/* TODO route 
    • get page d'accueil (présentation du site)
    
    • post page recherche (lister des biens/chambres à louer)
    • post système de recherche : tous les visiteurs peuvent filtrer les résultats par :
        o la ville
        o le nombre de places
        o le prix à la nuitée par personne
        o la date d’arrivée et la date de départ
   

Les pages réservées aux membres connectés seront les suivantes :
    • get page de profil (afficher les informations d’un hôte et la liste de ses biens mis en
    location)
   

    • get  page de compte (l’utilisateur connecté peut gérer les informations de son compte)
    • put page de compte (l’utilisateur connecté peut modifie les informations de son compte)

    • get page de ses biens (l’utilisateur connecté peut gérer ses biens)
    • get page d’un bien (afficher les informations du bien sélectionné avec la possibilité de réserver ce bien pour les membres connectés)
    • put page d’un bien (modifier les informations du bien sélectionné  pour les membres connectés)
    • delete page d’un bien (effacer les informations et le bien sélectionné  pour les membres connectés)
tous les visiteurs peuvent consulter les annonces sans être connectés 
    • get localisation les logements/bien sur un carte (affiche la localisation de tous les logements d'un hote)

Système de réservation : les membres connectés pourront réserver un bien d’une date
à une autre pour N personnes (attention à vérifier que le bien est disponible avant d’enregistrer une réservation).
    •get calendrier reservation hote
    .put calendrier reservation hote (ajoute les reservation d'un nouveau client)


Après une réservation, le solde du client et de l’hôte seront affectés en conséquence.
Le montant se calcule de la manière suivante : prix à la nuitée x nombre de jours réservés x nombre de personne
    • get solde hôte (affiche le montant du solde  de l'hote )
    • put solde hôte (modifie le montant du solde  de l'hote en fonction des réservation)
    • post envoi d’un mail de confirmation de la réservation au client et à l’hôte 
- */

app.listen(3000, () => console.log("Listening on port 3000..."));