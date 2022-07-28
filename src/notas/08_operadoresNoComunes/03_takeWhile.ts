/*

TAKE WHILE
- Permite recibir valores en caso de que la condición se cumpla

*/
import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (val) => console.log(val),
    complete: () => console.log("completado"),
  });
