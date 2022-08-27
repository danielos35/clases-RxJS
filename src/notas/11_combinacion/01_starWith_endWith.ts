/*

- StartWhith
Empieza a emitir valores cuando se emita el valor indicado como argumento

- End With 
Antes de que se complete el observable emite el valor que le indiquemos en los parentesis
*/
import { endWith, of, startWith } from "rxjs";

const number$ = of(1, 2, 3);

number$.pipe(startWith("inició")).subscribe(console.log);
number$.pipe(endWith("Finalizó")).subscribe(console.log);
