import { interval, Observer, timer } from 'rxjs'; 


// Emitir valores cada cierta cantidad de tiempo
const observer = {
    next: val => console.log(val),
    error: err => console.log(err),
    complete: ()=> console.log('completo')    
}


const interval$ = interval(1000); 


// Crear intervalo que inicia en 1 segundo
// const timer$ = timer(1000,2000);


// interval$.subscribe(observer); 
// timer$.subscribe(observer);



// Crear una notificación en cierto tiempo; 
const hoyEn5 = new Date(); 
hoyEn5.setSeconds(hoyEn5.getSeconds()+5); 
const timer$ = timer(hoyEn5);
timer$.subscribe(observer)
