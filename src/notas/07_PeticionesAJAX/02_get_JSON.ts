
import {ajax} from 'rxjs/ajax'
import { catchError, map } from 'rxjs/operators'


const url = 'https://httpbin.org/delay/1';



/*
ARGUMENTOS
- Argumento #1 url a consultar
- Argumento #2 headers



*/
const obs$ = ajax.getJSON(url, {
    'Content-Type':'application/json',
    'mi-token':'ABC123'
});

obs$.subscribe(res=>{
    console.log(res);
})