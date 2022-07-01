import { fromEvent, observable } from 'rxjs'; 


// Crear acciones en base a eventos
const src$1 = fromEvent<MouseEvent>(document, 'click'); 
const src$2 = fromEvent<KeyboardEvent>(document, 'keyup'); 



/*

DETECTAR TIPO DE EVENTO
const observer = {
    next: val => console.log(val)    
}
src$1.subscribe(event=>console.log(observer))

*/ 

src$1.subscribe(({x,y})=>console.log(x,y))
src$2.subscribe(event=>console.log(event.key))