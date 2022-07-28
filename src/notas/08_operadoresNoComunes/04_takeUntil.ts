import { fromEvent, interval, takeUntil } from "rxjs";
/*
TAKE UNTIL
- Recibe valores hasta que un observable halla terminado la emisión de datos 
*/

const boton = document.createElement("button");
boton.innerHTML = "Detener Timer";
document.querySelector("body").append(boton);

const counter$ = interval(1000);
const click$ = fromEvent<PointerEvent>(boton, "click");

counter$.pipe(takeUntil(click$)).subscribe({
  next: (val) => console.log(val),
  complete: () => console.log("tarea Completada"),
});
