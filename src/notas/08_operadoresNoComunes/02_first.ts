/*
FIRST 
- Toma el primer valor 
- Argumento#1, cuando un elemento cumpla una condición 
*/
import { first, fromEvent } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");
click$.pipe(first<PointerEvent>((event) => event.clientX >= 150)).subscribe({
  next: (val) => console.log(val),
  complete: () => {
    console.log("Completado");
  },
});
