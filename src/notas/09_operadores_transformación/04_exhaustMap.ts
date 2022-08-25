/*
- ExhaustMap

Se subscribe al primer observable y no tiene en cuenta si se emite una nueva suscribción

*/

import { concatMap, exhaustMap, fromEvent, interval, take } from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click = fromEvent(document, "click");

click.pipe(exhaustMap(() => interval$)).subscribe(console.log);
