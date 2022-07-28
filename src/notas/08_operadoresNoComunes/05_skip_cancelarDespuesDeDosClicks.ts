import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

/*
SKIP
- Permite saltar una cantidad de emisiones iniciales
*/

const boton = document.createElement("button");
boton.innerHTML = "Detener Timer";
document.querySelector("body").append(boton);

const counter$ = interval(1000);
const click$ = fromEvent<PointerEvent>(boton, "click").pipe(
  tap(() => {
    console.log("Tab antes de Skip");
  }),
  skip(1),
  tap(() => {
    console.log("Tab despues");
  })
);

counter$.pipe(takeUntil(click$)).subscribe({
  next: (val) => console.log(val),
  complete: () => console.log("tarea Completada"),
});
