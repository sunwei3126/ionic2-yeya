import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {Config} from '../config/config-service';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CustomerService {
  private LOGIN_URI:string = Config.API_SERVER + "/login";
  private CUSTOMER_URI:string = Config.API_SERVER + "/customers";
  private inqueryByCustomer:string = Config.API_SERVER + "/inquery/customer";
  private ordersByCustomer:string = Config.API_SERVER + "/orders/customer";
  private shoppingCartByCustomer:string = Config.API_SERVER + "/shopping_cart_items"

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

  getInqueriesByCustomerId(customer_id:string): Observable<any> {
    var  url = this.inqueryByCustomer + '/' + customer_id;
    return this.http.get(url).map(response => response.json());
  }

  getOrdersByCustomerId(customer_id:string): Observable<any> {
    var  url = this.ordersByCustomer + '/' + customer_id;
    return this.http.get(url).map(response => response.json());
  }

  getShoppingCartByCustomerId(customer_id:string): Observable<any> {
    var  url = this.shoppingCartByCustomer + '/' + customer_id;
    return this.http.get(url).map(response => response.json());
  }

}
