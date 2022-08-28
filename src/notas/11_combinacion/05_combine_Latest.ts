/*
MERGE

-  Combina los observables que se le ingresa, y solo se completa cuando todos los observables que contiene se completa

*/

import { combineLatest, from, fromEvent, merge, pluck } from "rxjs";

const input1 = document.createElement("input");
const input2 = document.createElement("input");

document.querySelector("body").append(input1, input2);

// Helper
const getInputStream = (elem: HTMLElement) => {
  return fromEvent(elem, "keyup").pipe(pluck("target", "value"));
};

combineLatest(getInputStream(input1), getInputStream(input2)).subscribe(
  console.log
);
