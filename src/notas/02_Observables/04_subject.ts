import {Observable, observable, Observer, Subject, Subscriber} from 'rxjs'

const observer:Observer<any> = {
    next: value => console.log(value), 
    error: error =>  console.log(error),
    complete: ()=> console.log('Observable completado')    
}

const intervalo$ = new Observable<number>(subs=>{
    const intervalo = setInterval(()=>subs.next(Math.random()),1000)
    return ()=>{
        clearInterval(intervalo)
    }
})


// let subs1 = intervalo$.subscribe(res=>{
//     console.log(res);
    
// })
// let subs2 = intervalo$.subscribe(res=>{
//     console.log(res);
    
// })


/*

Para consumr el mismo dato usamos subject 

- Muchas subscripciones se pueden subscribir a este dato.
- También es un observer.
- En lugar de estar subscritos al intervalo nos podemos subscribir al sujeto.
*/ 


const subjeto = new Subject();
intervalo$.subscribe(subjeto) 

subjeto.subscribe(res=>console.log(res))
subjeto.subscribe(res=>console.log(res))

