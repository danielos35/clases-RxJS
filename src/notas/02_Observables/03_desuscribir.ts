import {Observable, observable, Observer, Subscriber} from 'rxjs'

const observer:Observer<any> = {
    next: value => console.log(value), 
    error: error =>  console.log(error),
    complete: ()=> console.log('Observable completado')    
}

const intervalo = new Observable<number>( subscriber =>{
    let contador =  0
    // Creat contador 
    const intervalo = setInterval(()=>{
        subscriber.next(contador++)
    },1000)
    
    // La función que regresa el intervalo podrá finalizar procesos como en este caso el setInterval
    return ()=>{
        clearInterval(intervalo)
    }
})

const subs = intervalo.subscribe(res=>{
    console.log(res);
})

setTimeout(()=>{
    subs.unsubscribe()
},3000)