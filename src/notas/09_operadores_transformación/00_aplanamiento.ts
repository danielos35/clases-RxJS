import { fromEvent, debounceTime, map, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";
/*
APLANAMIENTO

- Suscribirnos a un valor a una linea del tiempo

ESTE ES UN EJEMPLO SIN OPERADORES DE APLANAMIENTO DE DATOS
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
    map((event) => {
      const texto = event.target["value"];

      return ajax.getJSON(`https://api.github.com/users/${texto}`);
    })
  )
  .subscribe((res) => {
    res.pipe(pluck("url")).subscribe(console.log);
  });
