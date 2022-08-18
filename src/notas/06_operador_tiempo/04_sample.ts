/*
SAMPLE

- Emitir el ultimo valor del primer observable

*/
import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent(document, "click");

interval$.pipe(sample(click$)).subscribe(console.log);
