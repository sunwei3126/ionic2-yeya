import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Config} from '../config/config-service';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CustomerService {
  customer:any
  private LOGIN_URI:string = Config.API_SERVER + "/login";
  private CUSTOMER_URI:string = Config.API_SERVER + "/customers";
  constructor(public http: Http) {
  }

  Login(userName:string, password:string): Observable<any> {
    var queryParams = `?userName=${userName}&password=${password}`;
    return this.http.get(this.LOGIN_URI + queryParams).map(response => response.json());
  }

  GetCustomerById(id:number) {
    var url = this.CUSTOMER_URI + "/" + id;
    return this.http.get(url).map(response => response.json());
  }
  
}
