import { interval, Observer } from 'rxjs'; 


// Emitir valores cada cierta cantidad de tiempo
const observer = {
    next: val => console.log(val),
    error: err => console.log(err),
    complete: ()=> console.log('completo')    
}


const interval$ = interval(1000) ; 

interval$.subscribe(observer)