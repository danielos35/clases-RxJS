import { range } from 'rxjs';
import {tap}  from 'rxjs/operators'; 


/*
TAP

- Permite disparar acciones secundarias cuando el observable emite datos.
- No retorna ningun valor y si se retorna no cambia ningun comoportamiento.
- Le podemos pasar como argumento un observer
*/ 

let valores$ = range(1,10);
valores$.pipe(tap({
    next:valor => console.log('Esto se va imprimir cada que se emita un valor ', valor),
    complete:()=>console.log('todo terminó')
    })).
    subscribe()