/*
Crear una secuencia de numeros en base un rango 
- Argumento #1: Valor inicial (valor por defecto es 0)
- Argumento #2: Conteo, valor final

*/

import{range, asyncScheduler} from 'rxjs'; 

// Sincrono
const obs$ = range(1,100); 
obs$.subscribe(console.log)


// Asincrono
const obs2$ = range(1,5, asyncScheduler); 

