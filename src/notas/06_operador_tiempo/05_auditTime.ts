/*
AUDITIME
- Emite un valor despues del tiempo indicado en el argumento despues de que se emita un valor
- Controlar valores de observables que emiten muchos valore
*/
import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    map(({ x }) => x),
    tap((val) => console.log("tap", val)),
    auditTime(2000)
  )
  .subscribe(console.log);
