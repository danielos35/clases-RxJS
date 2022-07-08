import { range, from, Subscriber, fromEvent } from 'rxjs'; 
import {filter, map} from 'rxjs/operators'; 

/*
Encadenamiento de operadores
- El encadenamiento de operadores se aplica de arriba hacia abajo 
- cada operador es un callBack dentro del pipe     


*/ 
 const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
     map(event=>{
         return event.code
     }),
     filter(valor => valor === 'Enter')
 ); 

 keyUp$.subscribe(console.log)