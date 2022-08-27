import { concat, interval, take } from "rxjs";
/*
CONCAT

-  Función que recibe observables como argumento y crea un nuevo observable cuando el observable se complete

*/

const interval$ = interval(1000);
concat(interval$.pipe(take(3)), interval$.pipe(take(2))).subscribe(console.log);
