import {
  throttleTime,
  distinctUntilChanged,
  fromEvent,
  pluck,
  asyncScheduler,
} from "rxjs";
/*
  THROTTLETIME
  
  ESPERA EL TIEMPO INDICADO COMO ARGUMENTO PARA EMITIR EL SIGUIENTE VALOR
  
  Puede ser utilizado poara buscadores
  
  */

const click$ = fromEvent(document, "click");

click$.pipe(throttleTime(3000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");
input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    pluck("target", "value"),
    distinctUntilChanged()
  )
  .subscribe(console.log);
