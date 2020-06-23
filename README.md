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
| /:id| get | renvoie les info du user avec l'io correspondant |  |
| /:id | put | mettre a jour les info du user avce l'id correspondant |  |
| /login | post | se connecter |  |
| /signup | post | s'incrire |  |
|--|--|---|---|



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5NzEwMTAyMywxOTkwNjM5MDAxLDU4ND
kxNzY2NCwxOTU0NTY3NTY3LC03NjY3Njg2NzQsMTIwNjk2Mjcz
MiwtODM2NzUxNTg3LDkxMDUyNzk1OCwtNjA3OTMwMzQyLC0xOT
c4NjUyMjQ3LC0zMzI0NTUzNjNdfQ==
-->