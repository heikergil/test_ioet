    Español 
### Hola, mi nombre es Heiker y esta es mi solucion para el ejercicio de IOET.

##### Se trata de una aplicacion cli en nodejs sin ninguna dependencia o libreria externa, solo jest para unit testing.

### instrucciones 
La aplicacion lee un archivo de texto que debe estar en la misma carpeta que la aplicacion, el archivo puede tener cualquier cantidad de datos con el siguiente formato:

RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00  
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00,SU20:00-21:00  
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00  
HEIKER=MO09:00-11:00,TU12:00-14:00,SA08:00-10:00  
JOSE=TU12:00-14:00,SA08:00-10:00,SU14:00-16:00  

Para correr la aplicacion localmente clona este repositorio de [GitHub](https://github.com/heikergil/test_ioet) en una carpeta local, el sistema debe tener instalado nodejs

Para correr la aplicacion, estando en la carpeta donde clonaron el repositorio se utiliza el comando:
```
node app <nombre-del-archivo.txt>
```
<nombre-del-archivo.txt> es el nombre de un archivo de texto incluyendo extensión que contiene datos en el formato descrito anteriormente, De no pasar ningun argumento la aplicacion buscara leer el archivo "file.txt" por defecto, para correr los tests es necesario usar npm init para instalar jest.

En el repositorio de github o en los archivos clonados localmente encontraran una carpeta "helpers" con un unico archivo "helpers.js" donde se encuentra 3 funciones que son exportadas utilizando module.exports y se utilizan en app.js donde esta alojada la logica principal de la aplicacion.

En app.test.js se encuentran test basicos escritos con jest, para correrlos solo bast con usar "npm test"

### Metodologia

Para resolver el ejercicio primero plasme el problema en papel, haciendo bocetos y diagramas de flujo que describieran de manera general la logica de la solucion, luego especificando cada requerimiento y separandolos en funciones de forma que cada funcion tenga un solo trabajo.
    
Trate de no repertir codigo y mantener la solucion lo mas simple posible
    
    
     English
### Hello, my name is Heiker and this is my solution for the IOET exercise.

##### It is a cli application in nodejs without any dependency or external library, only jest for unit testing.

### instructions
The application reads a text file that must be in the same folder as the application, the file can have any amount of data with the following format:

RENE = MO10: 00-12: 00, TU10: 00-12: 00, TH01: 00-03: 00, SA14: 00-18: 00, SU20: 00-21: 00
ASTRID = MO10: 00-12: 00, TH12: 00-14: 00, SU20: 00-21: 00, SU20: 00-21: 00
ANDRES = MO10: 00-12: 00, TH12: 00-14: 00, SU20: 00-21: 00
HEIKER = MO09: 00-11: 00, TU12: 00-14: 00, SA08: 00-10: 00
JOSE = TU12: 00-14: 00, SA08: 00-10: 00, SU14: 00-16: 00

To run the application locally, clone this repository from [GitHub](https://github.com/heikergil/test_ioet) in a local folder, the system must have nodejs installed

To run the application, being in the folder where the repository was cloned, use the command:
``` 
node app <file-name.txt>
```
<file-name.txt> is the name of a text file with data in the format described previously, If no argument is passed, the application will seek to read the file "file.txt" by default, to run the tests it is necessary to use npm init to install jest.

In the github repository or in the locally cloned files you will find a "helpers" folder with a single "helpers.js" file in wich there are 3 functions that are exported using module.exports and are used in app.js where the main logic of the application is located.

In app.test.js there are basic tests written with jest, to run them just use "npm test"

### Methodology

To solve the exercise, first, I wrote the problem on paper, making sketches and flow diagrams that generally describe the logic of the solution, then specifying each requirement and separating them into functions so that each function has only one job.
    
I Tried not to repeat myself (DRY) and keep the solution as simple as possible 