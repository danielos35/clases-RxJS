import {Observable, observable, Observer, Subscriber} from 'rxjs'

const observer:Observer<any> = {
    next: value => console.log(value), 
    error: error =>  console.log(error),
    complete: ()=> console.log('Observable completado')    
}


const obs$ = new Observable<string>( subscriber => {
    subscriber.next('Hola Mundo - 1'); 
    subscriber.next('Hola Mundo - 2'); 
    subscriber.error('error controlado')
    subscriber.complete()
    subscriber.next('Hola Mundo - 3'); 
})

obs$.subscribe(observer)


/*
Esto es considerado una mala practica, y se debe de utilizar un observer: 

obs$.subscribe(
    valorNext => console.log('next', valorNext),
    error => console.log('error: ',error),
    ()=>console.log('Observable completado') 
)
*/

