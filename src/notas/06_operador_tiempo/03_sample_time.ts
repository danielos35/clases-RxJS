import { fromEvent, map, sampleTime } from "rxjs";
/*
SAMPLE TIME
- Obtener el ultimo valor emitido en un intervalo de tiempo que es el indicado como argumento
*/

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);
