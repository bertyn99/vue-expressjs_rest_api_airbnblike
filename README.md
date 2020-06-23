# vue-expressjs_rest_api_airbnblike

App en vue js et avec une Restfull api en Express +Mariadb

## Architecture du projet 
### Server
/src

 - /db 
		 airbnb.sql 
		 index.js
		 
 - /model
		user.js
		goods.js
		localalisation.js
		imgUrl.js
 
 - /routes
		 goods.js
		 user.js
		 verifytoken.js
		 search.js
 - Index.js

### Client
/src

 - /components
		 airbnb.sql 
		 index.js
		 
 - /router
		user.js
		goods.js
		
 
 - /store
		 goods.js
		 user.js
		 verifytoken.js
		 search.js
		 
 - /views
 
 - Index.js

## Instalation

 - ### Client

Pour pouvoir aller dans /client faire un

	npm install

 - ### Server
Import le ficher suivant dans le phpadmin
> airbnb.sql 

Pour pouvoir aller dans /server faire de mem

	npm install
	
## Requette API
Racine du serveur api:

> http://151.80.57.11/

### User
| Requete | Type   | Explication | Json |  
|--|--|--|--|
| users/:id| get | renvoie les info **du user** avec l'id correspondant | [{}] |
| users/:id | put | mettre a jour les info **du user** avce l'id correspondant |  |
| users/login | post | se connecter |  |
| users/signup | post | s'incrire |  |

### Goods
| Requete | Type   | Explication | Json |  
|--|--|--|--|
| goods/:id | get | renvoie les info de **l'annonce** avec l'id correspondant |  |
| goods/:id | put | mettre a jour les info de **l'annonce**  avce l'id correspondant |  |
| /users/:userid/goods/:id | get | renvoie les info **d'une annonce** d'un user correspondant |  |
| /users/:userid/goods/ | get | renvoie les info des annonces d'un **user** |  |
| /users/:id/goods/new | post | créer un annonce |  |

### Reservation
| Requete | Type   | Explication | Json |  
|--|--|--|--|
|  | get | renvoie les info de **la réservation** avec l'id correspondant |  |
|  | get | renvoie les info de **toute les réservation** du bien correspondant |  |
|  | put | mettre a jour les info **d'une réservation**  du bien correspondant |  |
|  | post | Créer **la réservation** d'un user  correspondant |  |
|  | post | Annuler **une réservation**  les info des annonces  |  |
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjk0Mzc5MjgyLC02OTcwNTY4NzgsMTM1Nj
gzNjk2NSwtMTI2ODI2Mjk0MywyNDMyOTQ0NTUsMTk5MDYzOTAw
MSw1ODQ5MTc2NjQsMTk1NDU2NzU2NywtNzY2NzY4Njc0LDEyMD
Y5NjI3MzIsLTgzNjc1MTU4Nyw5MTA1Mjc5NTgsLTYwNzkzMDM0
MiwtMTk3ODY1MjI0NywtMzMyNDU1MzYzXX0=
-->