/*
Map 
- Permite transformar los valores en los que nosotros necesitemos

Pipe
- Permite aplicar nuestro operador

Tipado 
- map<valorEntrada, valorSalida>
*/ 

import { range, fromEvent, Subscriber } from 'rxjs'; 
import {map}  from 'rxjs'; 

range(1,5).pipe(
    map<number,number>(val=>{
        return val * 10
    })
).subscribe(console.log)


const keyUp$ = fromEvent<KeyboardEvent>(document,'keyup'); 
const keyUpCode$ = keyUp$.pipe(map<KeyboardEvent,string>(event => event.code)); 
keyUpCode$.subscribe(console.log);
keyUp$.subscribe(val=>console.log(val))