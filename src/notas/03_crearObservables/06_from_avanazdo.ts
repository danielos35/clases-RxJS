import { from, of } from 'rxjs'; 

/*

OF
- Toma argumentos y genera una secuencia de valores.

FROM
- Crea un observable en base a un objeto, observable, o arreglo 

*/ 


const observer = {
    next: val => console.log('valor: ', val),
    complete: () => console.log('Completado')
}


// const sorce$ = from([1,2,3,4,5]); 
// sorce$.subscribe(observer); 

// const source$ = from(fetch('https://api.github.com/users/klerith')); 

// source$.subscribe(async (res)=>{
//     console.log(res); 
//     const data = await res.json(); 
//     console.log(data);
    
    
// })


// Iterable

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
}


const miIterable = miGenerador(); 


from(miIterable).subscribe(observer)