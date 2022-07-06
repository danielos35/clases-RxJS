/*
Pluck
-  Cuando necesitamos extraer  solo el valor de una propiedad de un objeto que estamos recibiendo y que esa sea la nueva salida.
*/ 

import { range, fromEvent, Subscriber } from 'rxjs'; 
import {pluck}  from 'rxjs'; 


const keyUp$ = fromEvent<KeyboardEvent>(document,'keyup'); 

// Un objeto sin objetos anidados
const keyUpPluck$ = keyUp$.pipe(
    pluck('key')
); 
keyUpPluck$.subscribe(code => console.log('pluck', code))


/*
Con propiedades anidadas.
- Argumento #1: objeto
- Argumento #2: objeto o propiedad 
- Argumento #3: objeto o propiedad
*/

const keyUpPluckAnidado = keyUp$.pipe(
    pluck('target','baseURI')
)

keyUpPluckAnidado.subscribe(console.log)