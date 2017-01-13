import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Rx';
import { User }           from './user';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersService {

    private usersUrl = 'api/users';

    constructor(private http: Http) { }

    getUsers() : Observable<User[]> {
         return this.http.get(this.usersUrl)
                    .map((r: Response) => <User[]>r.json())
                    .catch(this.handleError);
    }
    
    private handleError(error: any) {
        //console.error('An error occurred', error); // for demo purposes only
        //return Observable.throw(error.message || error);
        return Observable.throw(error.message || error);
    }
}