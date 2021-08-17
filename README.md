:cherry_blossom: Demo de Cypress SQL :cherry_blossom:

Demo para brindar una presentación en la empresa que trabajo, acerca de como utilizar Cypress para testear SQL.
- Para poder clonar este repositorio de manera exitosa, se debe tener instalado NPM y mysql.
- Al clonar este repositorio, correr el comando ```npm install```
- Para ejecutar los tests, correr el comando ```npx cypress open``` y seleccionar el archivo demoSQL.spec.js

:bulb: Para poder testear SQL, primero debi setear la información de la base en el archivo cypress.json y luego crear la conexión con la base de datos en cypress/plugins/index.js
