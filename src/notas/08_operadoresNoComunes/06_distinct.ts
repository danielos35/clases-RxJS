import { distinct, of } from "rxjs";
/*
DISTINCT
-  Permite filtrar aquellos valores que no han sido previamente emitidos por el observable;
-  En caso de un objeto le debemos de indicar la propiedad con la que realizará la comparación.
*/

interface Personaje {
  nombre?: string;
  objeto?: any;
}

const numeros$ = of(1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 3, 1);
numeros$.pipe(distinct()).subscribe(console.log);

let personajes: Personaje[] = [
  {
    nombre: "daniel",
  },
  {
    nombre: "daniel",
  },
  {
    nombre: "daniel",
  },
  {
    nombre: "daniel",
  },
  {
    nombre: "daniel",
  },
  {
    nombre: "daniel",
  },
  {
    nombre: "daniel",
  },
  {
    nombre: "daniel",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
  {
    nombre: "Sandra",
  },
];

let personajes$ = of(personajes);
// personajes$.pipe(distinct((p:Personaje) => console.log(p?.nombre))).subscribe(console.log);
