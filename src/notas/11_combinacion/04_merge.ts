/*
MERGE

-  Combina los observables que se le ingresa, y solo se completa cuando todos los observables que contiene se completa

*/

import { from, fromEvent, merge, pluck } from "rxjs";

const keyUp$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

merge(keyUp$.pipe(pluck("type")), click$.pipe(pluck("type"))).subscribe(
  console.log
);
