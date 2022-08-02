/*
DISTINC UNTIL CHANGE

- Emite valores desde que la emisión anterior no sea la misma

*/
import { distinct, of, distinctUntilChanged } from "rxjs";
interface Personaje {
  nombre?: string;
  objeto?: any;
}

const numeros$ = of(1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 3, 1);
numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

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
personajes$.pipe(distinctUntilChanged()).subscribe(console.log);
