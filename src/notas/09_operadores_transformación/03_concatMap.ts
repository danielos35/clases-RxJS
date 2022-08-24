import { concatMap, fromEvent, interval, take } from "rxjs";
/*
Concat map

-  Concatena los observables al final de la emisión de los de mas
-  Permite obtenr todos los valors emitidos por observable
*/

const interval$ = interval(500).pipe(take(3));
const click = fromEvent(document, "click");

click.pipe(concatMap(() => interval$)).subscribe(console.log);
