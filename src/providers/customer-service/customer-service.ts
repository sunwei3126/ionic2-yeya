import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the CustomerServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CustomerService {

  private API_ENDPOINT:string ="http://localhost:15536/api/customers"

  constructor(public http: Http) {
    console.log('Hello CustomerServiceProvider Provider');
  }

  getAllCustomers():Observable<any> {
     return this.http.get(this.API_ENDPOINT).map(response=>response.json());
  }

}
