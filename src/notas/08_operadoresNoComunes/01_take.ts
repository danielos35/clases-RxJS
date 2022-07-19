import { of, take } from "rxjs";



/*
TAKE
Limita las emisiones
- Argumento #1 Numero de emisiones a permitir
*/ 


const numeros$ = of(1,2,3,4,5); 

numeros$.pipe(
    take(2)
).subscribe({
    next:val => console.log(val),
    complete:() => console.log('completado'),

})

