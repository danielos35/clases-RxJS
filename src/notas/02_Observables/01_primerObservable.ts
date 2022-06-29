/*


IMPORTACIONES
- Lo primero que se debe realizar para trabajar con observables es importar el obsevable que vamos a usar. 
- Si el objeto se estrae directamente de rxjs este será usado para crear observables.

NOTAS 
- Para ejecutar un observable necesitamos tener primero una subscripción. 

NEXT 
- Emite el valor

COMPLETE 
- Finaliza las emiciones de datos, todos los datos despues de este metodo no serán emitidos


TIPADO.
- Siempre es importante tipar el observable, para saber el tipo de dato que va fluir por este
-  new Observable<string>



.............ARGUMENTOS DE UN SUBSCRIBE.....................
- CallBack #1: ejecuta el next
- CallBack #2: ejecuta el error (en caso de que se presente algún error, debe de succeder antes del complete); 
- CallBack #3: muestra que la función efectivamente fue completada. 

- 

*/ 