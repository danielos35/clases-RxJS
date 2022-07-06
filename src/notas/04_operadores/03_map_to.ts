/*
Map to
- Definir la salida de nuestro objeto con un valor definido
*/ 

import { range, fromEvent, Subscriber } from 'rxjs'; 
import {mapTo}  from 'rxjs/operators'; 


const keyUp$ = fromEvent<KeyboardEvent>(document,'keyup'); 

// Un objeto sin objetos anidados
const keyUpMapTo$ = keyUp$.pipe(
    mapTo('teca presionada')
); 

keyUpMapTo$.subscribe(console.log);

