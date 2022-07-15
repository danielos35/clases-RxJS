
import {ajax} from 'rxjs/ajax'
import { catchError, map } from 'rxjs/operators'
import { pluck } from 'rxjs';
 
const url = 'https://api.github.co2m/users?per_page=5'; 
ajax(url)
    .pipe(
        pluck('response'),
        catchError(err=>{
            console.log('error',err);
            return []
        })
    )
    .subscribe(console.log)