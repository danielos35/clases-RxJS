import {
  fromEvent,
  debounceTime,
  map,
  pluck,
  mergeAll,
  mergeMap,
  switchMap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

/*
  APLANAMIENTO
  
  switchMap
  
  - Cada que se emita un nuevo valor se subscribe a el y completa el observable anterior
  */

// Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

const url = "https://httpbin.org/delay/1?arg=";

input$
  .pipe(
    pluck("target", "value"),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
