import { debounceTime, distinctUntilChanged, fromEvent, pluck } from 'rxjs';
/*
DEBOUNCE TIME

- Permite saber las milesimas de segundo desde la ultima emisión y si esas milesima de segundo sobrepasan al argumento, entonces emitiran ese valor 

- Ayuda a distinguir la cantidad de emisiones de nuestro observable inicial 

*/ 



const click$ = fromEvent( document , 'click'); 

click$.pipe(
    debounceTime(3000)
).subscribe(console.log); 



const input = document.createElement('input'); 
document.querySelector('body').append(input); 


const input$ = fromEvent(input, 'keyup'); 
input$.pipe(
    debounceTime(1000),
    pluck('target','value'), 
    distinctUntilChanged()
).subscribe(console.log)