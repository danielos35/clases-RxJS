import { range, from, Subscriber, fromEvent } from 'rxjs'; 
import {filter, map} from 'rxjs/operators'; 


const rango$ = range(1,10); 

rango$.pipe(filter((res,i)=>{
    console.log(`indice: ${i}`);
    return res%2===0
    
    }))
    .subscribe((res)=>{
    console.log(res);
    })



interface Personaje{
    tipo:string, 
    nombre:string
}
const heroes:Personaje[] = [
    {    
        tipo:'heroe',
        nombre:'Batman'
    },
    {    
        tipo:'heroe',
        nombre:'Super man'
    },
    {    
        tipo:'villano',
        nombre:'Joker'
    }
]


const hero$ = from(heroes);
hero$.pipe(filter(res=>res.tipo === 'heroe')).subscribe(res=>{console.log('Nombre:',res.nombre)    })

