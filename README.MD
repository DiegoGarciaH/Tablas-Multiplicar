# Tabla de multiplicar

Este programa crea un archivo .txt de las tablas de multiplicar, pero esta es a traves de la terminal, el programa principal es llamado app.js; Para ejecutar el archivo lo haremos con el siguiente comando

<code>node app.js</code>

Igual tendra una manera de ponerle cual sea la base de nuestro programa a traves de una bandera que sera:

<code>node app.js --base= #Number</code> 
o 
<code>node app.js -b #Number</code> 

Ademas de esto podremos poder mostrar el resultado en consola, el cual va a tener colores :3, esto sera a traves de la bandera 'listar', que se muestra asi:

<code>node app.js -l</code> 

Para finalizar podremos agregar un limite de la tabla de multiplicar a traves de la bandera 'hasta':

<code>node app.js -h #limite</code> 

Podemos juntar las expresiones:

<code>node app.js -b 5 -l -h 20</code> 