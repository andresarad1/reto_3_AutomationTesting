# Automation testing landing page Hotels
---

#### Haremos test a la [página](https://andresarad1.github.io/hotels/) creada como parte del reto N° 3 del bootcamp de DevTools Academy 
![Book it](/asset/Bookit-main.jpg)
##### La página cuenta con 4 filtros:
 - Filtro por país
 - Filtro por tamaño
 - Filtro por precio
 - Filtro por fechas

### A continuación se detallan los pasos para correr estos tests desde tu máquina

1. Descarga este repositorio

2. Descarga las dependencias para correr el proyecto. Para hacerlo debes abrir tu consola y escribir el siguiente comando:
 ```sh 
     npm install cypress --save-dev 
 ```

3. Una vez descargadas las dependencias **node_modules** en tu repositorio, vamos a correr el siguiente comando:
```sh
    npx cypress open 
```

4. Se abrirá una ventana emergente, en esta elegimos __"E2E Testing"__
![cypress](/asset/ini-cypress.PNG)

5. Otras opciones se mostrarán la ventana, aquí escogeremos el navegador, en este caso será ![Google](/asset/cromo.png) Chrome y luego seleccionamos __"Start E2E Testing in Chrome"__
![cypress](/asset/sec-cypress.png)

6. Se abrirá un dashboard, el cual estará en la opcion de **Specs** y en el visualizarás la carpeta __cypress\e2e\cypress-challenge__, la cual contiene dos tests:
    - cards
    - filters
    
    Puedes escoger cualquier test tan solo dando clic sobre el deseado

7. Al escoger algún test éste correrá de forma automática y podrás ver los resultados del mismo

8. Si quieres salir solo debes cerrar el dashboard o la ventana de Cypress 


