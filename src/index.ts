/*

Observable sincrono


*/ 

import {of} from 'rxjs';

const obs$ = of(1,2,3,4,5,6); 
obs$.subscribe(
    next=>console.log(next),
    error=>console.log(error),
    ()=>console.log('completado')
)