import {asyncScheduler} from 'rxjs'; 


// SET TIME OUT............................
setInterval(()=>{},3000);
setInterval(()=>{},3000); 

const saludar = ()=>{console.log('Hola mundo')}; 
asyncScheduler.schedule( saludar, 2000)

const saludarDos = (nombre)=>{console.log('Hola mundo '+ nombre)}; 


/*
Argumentos 
#1 Función a ejecutar 
#2 Tiempo en el que se ejecutará la función.
#4 Argumento para la función

*/ 

asyncScheduler.schedule( saludarDos, 2000, 'Daniel')


// SET INTERVAL
const sub = asyncScheduler.schedule(function(estado){
    console.log(estado)

    this.schedule( estado + 1, 1000)
}, 2000, 0); 


// setTimeout(()=>{
//     sub.unsubscribe()
// }, 5000)


asyncScheduler.schedule(()=>{sub.unsubscribe(); console.log('Finaliza sub');
}, 5000)