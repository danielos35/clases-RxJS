import { from} from 'rxjs';
import {scan} from 'rxjs/operators'
/*
Reduce
- Igual al reduce, solo que emite el valor acumulado en tiempo real
*/ 

let numeros = [1,2,3,4,5]; 
from(numeros).pipe(
    scan((acc,val)=>{
        return acc + val
    })
)
.subscribe(console.log)