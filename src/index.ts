/*

Empieza a emitir valores cuando se emita el valor indicado como argumento

*/
import { of, startWith } from "rxjs";

const number$ = of(1, 2, 3);

number$.pipe(startWith(0)).subscribe(console.log);
