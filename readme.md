# Hola, mi nombre es Heiker y esta es mi solucion para el ejercicio de IOET.


Se trata de una aplicacion cli en nodejs sin ninguna dependencia o libreria externa, solo jest para unit testing.

## instrucciones 
La aplicacion lee un archivo de texto que debe estar en la misma carpeta que la aplicacion, el archivo puede tener cualquier cantidad de datos con el siguiente formato:

>RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00  
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00,SU20:00-21:00  
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00  
HEIKER=MO09:00-11:00,TU12:00-14:00,SA08:00-10:00  
JOSE=TU12:00-14:00,SA08:00-10:00,SU14:00-16:00  

Para correr la aplicacion se utiliza el comando "node app <nombre-del-archivo.txt>", de no pasar ningun argumento la aplicacion buscara leer el archivo "file.txt" por defecto
