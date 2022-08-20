import { fromEvent, debounceTime, map, pluck, mergeAll } from "rxjs";
import { ajax } from "rxjs/ajax";

import { UsuarioGitHub } from "../../interfaces/usuarioGitHub.interface";
/*
APLANAMIENTO

MERGE ALL
- Se suscribe a todos los observables a los que nos encontremos suscriptos

- El procedimiento de unificar observables se conoce como "operadores de Aplanamiento"

- Lo ideal es siempre tipar la entrada y la salia de información

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
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent>("target", "value"),
    map((texto) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    mergeAll(),
    pluck<any, any>("items")
  )
  .subscribe((res: UsuarioGitHub[]) => console.log(res[0].url));
