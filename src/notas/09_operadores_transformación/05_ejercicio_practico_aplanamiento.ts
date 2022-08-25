/*
Caso de uso real de operadores de aplanamiento
*/

import {
  fromEvent,
  map,
  mergeMap,
  tap,
  pluck,
  catchError,
  of,
  switchMap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

// Helper
const peticionHttpLogin = (userPass) =>
  ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    pluck("response", "token"),
    catchError((err) => of("Error de usuario"))
  );

const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

// Configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.innerText = "Ingresar";

// Insertar

form.append(inputEmail, inputPass, submitBtn);
document.querySelector("body").append(form);

// Streams
const submitForm$ = fromEvent(form, "submit").pipe(
  tap((eve) => eve.preventDefault()),
  map((eve) => ({
    email: eve.target[0].value,
    password: eve.target[1].value,
  })),
  //   Realizar solo la ultima petición
  switchMap(peticionHttpLogin)

  // realiza todas las peticiones
  //   mergeMap(peticionHttpLogin)

  // Realiza solo la ultoma petición
  //   exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe((token) => console.log(token));
