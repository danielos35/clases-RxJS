import { interval, take } from 'rxjs';
import { range } from 'rxjs';
import { reduce } from 'rxjs/operators';

/*
REDUCE
- Funciona de la misma manera que en JS 
- Solo lanzará una emisión del valor final acumulado
*/ 

interval(1000).pipe(
    take(3),
    reduce((acc,val)=>acc+val)
).subscribe(
    {
        next:valor=>console.log(valor),
        complete:()=>console.log('Función completada')
    }
)
