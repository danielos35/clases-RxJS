
import {ajax} from 'rxjs/ajax'
import { catchError, map } from 'rxjs/operators'


const url = 'https://httpbin.org/delay/1';

/*
ARGUMENTOS GET
- Argumento #1: Url de la consulta
- Argumento #2: header
*/ 
ajax.get(url,{}); 

/*
ARGUMENTOS POST
- Argumento #1: Url de la consulta
- Argumento #2: Body
- Argumento #3: header
*/ 


ajax.post(url,{
    id:1
},{}).subscribe(console.log);



// OTRA MANERA DE HACER PETICIONES
ajax(
    {
        url,
        method:'POST',
        headers:{}, 
        body:{
            id:1
        }
    } 
).subscribe(console.log)


ajax(
    {
        url,
        method:'DELETE',
        headers:{}, 
        body:{
            id:1
        }
    } 
).subscribe(console.log)