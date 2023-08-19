# Automation testing landing page hotels
---

#### Haremos test a la [pagina](https://andresarad1.github.io/hotels/) creada como parte del reto N° 3 del bootcamp de devtools academy 
[](/asset/Bookit-main.jpg)
##### La página cuenta con 4 filtros:
 - Filtro por país
 - Filtro por tamaño
 - Filtro por precio
 - Filtro por fechas

### A continuacion detallo los pasos para correr estos test desde tu maquina

1. Descarga este repositorio

2. Descarga las dependencias para correr el proyecto, la forma de hacerlo es abrir tu consola y escribir el siguiente comando 
 ```sh 
     npm install cypress --save-dev 
 ```

3. Una vez descargada las dependencias **node_modules** en tu repositorio, vamos a correr el siguiente comando 
```sh
    npx cypress open 
```

4. Te abrira una ventana emergente, en esta elegimos __"E2E Testing"__
[](/asset/ini-cypress.PNG)

5. Te cargara en la ventana otras opciones, aqui escogeremos el navegador en este caso ![Google](/asset/cromo.png) Chrome, luego selecionamos __"Start E2E Testing in Chrome"__
[](/asset/sec-cypress.png)

6. Nos abrira un dashboard, el cual estará en la opcion de **Specs** y en el tendras la carpeta __cypress\e2e\cypress-challenge__. Esta carpeta contiene dos tests:
    - cards
    - filters
    
    Puedes escoger cualquier test, solo dando clic sobre el deseado

7. Al escoger algun test empezaran a correr de forma automatica y podras ver los resultados del mismo

8. Si quieres salir solo debes cerrar el dashboard o la venta de cypress 


