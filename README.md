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
| users/:id| get | renvoie les info **du user** avec l'id correspondant |  |
| users/:id | put | mettre a jour les info **du user** avce l'id correspondant |  |
| users/login | post | se connecter |  |
| users/signup | post | s'incrire |  |

### Goods
| Requete | Type   | Explication | Json |  
|--|--|--|--|
| goods/:id | get | renvoie les info de **l'annonce** avec l'id correspondant |  |
| goods/:id | put | mettre a jour les info de **l'annonce**  avce l'id correspondant |  |
| /users/:userid/goods/:id | post | renvoie les info **d'une annonce** d'un user correspondant |  |
| /users/:userid/goods/ | post | renvoie les info des annonces d'un **user** |  |




<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIzMzkwNTU0LDE5OTA2MzkwMDEsNTg0OT
E3NjY0LDE5NTQ1Njc1NjcsLTc2Njc2ODY3NCwxMjA2OTYyNzMy
LC04MzY3NTE1ODcsOTEwNTI3OTU4LC02MDc5MzAzNDIsLTE5Nz
g2NTIyNDcsLTMzMjQ1NTM2M119
-->