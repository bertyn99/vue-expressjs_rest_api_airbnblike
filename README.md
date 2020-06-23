# vue-expressjs_rest_api_airbnblike

App en vue js et avec une Restfull api en Express

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
| users/:id| get | renvoie les info du user avec l'io correspondant |  |
| users/:id | put | mettre a jour les info du user avce l'id correspondant |  |
| users/login | post | se connecter |  |
| users/signup | post | s'incrire |  |

### Goods
| Requete | Type   | Explication | Json |  
|--|--|--|--|
| goods/:id | get | renvoie les info de l'annonce avec l'id correspondant |  |
| goods/:id | put | mettre a jour les info de l'annonce  avce l'id correspondant |  |
| /users/:userid/goods/:id | post | renvoie les info d'une annonces d'un user correspondant |  |
| /users/:userid/goods/ | post | s'incrire |  |




<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4MTU0NjEwOTgsMTk5MDYzOTAwMSw1OD
Q5MTc2NjQsMTk1NDU2NzU2NywtNzY2NzY4Njc0LDEyMDY5NjI3
MzIsLTgzNjc1MTU4Nyw5MTA1Mjc5NTgsLTYwNzkzMDM0MiwtMT
k3ODY1MjI0NywtMzMyNDU1MzYzXX0=
-->