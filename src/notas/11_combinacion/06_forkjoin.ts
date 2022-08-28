/*

Fork join
-  Emite todos los valores de los observables completados, en cuanto TODOS estén completados

*/

import { delay, forkJoin, interval, of, take } from "rxjs";

const numeros$ = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of("a", "b", "c", "d").pipe(delay(3500));

// forkJoin(numeros$, intervalo$, letras$).subscribe((res) => {
//   console.log("numeros", res[0]);
//   console.log("intervalo", res[1]);
//   console.log("letras", res[2]);
// });

// Enviar como un objeto

forkJoin({ numeros$, intervalo$, letras$ }).subscribe(console.log);
