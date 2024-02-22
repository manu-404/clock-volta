# Projet : Volta Clock

![The San Juan Mountains are beautiful!](/screenshot/volta-clock.png "Volta Clock")


## Backend 
* Node 20.11.1 / NPM 10.2.4
* Framework : [NestJS 10.0.0](https://docs.nestjs.com)
* ORM : [Prisma 5.10.0](https://www.prisma.io)
* Test : [Jest 29.5.2](https://jestjs.io/docs/29.5/getting-started)
### Architecture
Architecture NestJS générée par le [CRUD generator NestJS](https://docs.nestjs.com/recipes/crud-generator#generating-a-new-resource)

### Améliorations
* Gestion des erreurs (404, 400, 500, ...) - Exemple : [ExceptionFiler](https://docs.nestjs.com/exception-filters#exception-filters-1)
* Validation des données en entrée - Exemple : [ValidationPipe + class-validator](https://docs.nestjs.com/techniques/validation)



## Frontend
* Node 20.11.1 / NPM 10.2.4
* Framework : [React 18.2](https://react.dev)
* UI : [MUI 5.15.10](https://mui.com)
* Test : [Jest 27.5.1](https://jest-archive-august-2023.netlify.app/docs/27.x/getting-started/) et [testing-library 13.4.0](https://testing-library.com)

### Architecture 
3 dossiers principaux : 
* **api** : contient ce qu'il faut pour communiquer avec l'API "alarms" 
* **components** : contient tous les composants React 
* **utils**: contient des fonctions utiles pouvant être utilisées partout dans l'application

### Améliorations
* Implémentation d'un useReducer plutôt que de multiples useState
* Faire un design plus aboutit

## Features à ajouter
* Gestion de plusieurs fuseaux horaires 
* Ajout récurence dans les alarmes (tous les jours - weekend - ...)
