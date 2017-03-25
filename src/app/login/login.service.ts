import { Injectable } from '@angular/core'
import { Headers, Http,RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Invest } from './invest'

@Injectable()
export class LoginService {

  private heroesUrl = '/api/uaa/oauth/token'

  constructor(private http: Http){}

  login(username:string,password:string): Promise<Invest[]> {
    let headers = new Headers({ 
        'Content-Type': 'application/x-www-form-urlencoded' ,
        'Authorization': 'Basic YWNtZTphY21lc2VjcmV0'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.heroesUrl,`username=${username}&password=${password}&grant_type=password`,options)
    		   .toPromise()
    		   .then(response => response.json().data as Invest[])
    		   .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }



}

