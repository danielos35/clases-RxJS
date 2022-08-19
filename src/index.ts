import { fromEvent, debounceTime, map, pluck, mergeAll } from "rxjs";
import { ajax } from "rxjs/ajax";
/*
APLANAMIENTO

MERGE ALL
- Se suscribe a todos los observables a los que nos encontremos suscriptos

- El procedimiento de unificar observables se conoce como "operadores de Aplanamiento"


*/

// Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    debounceTime(500),
    pluck("target", "value"),
    map((texto) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    mergeAll(),
    pluck("items")
  )
  .subscribe(console.log);
