import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Config } from '../config/config-service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  private LOGIN_URI:string = Config.API_SERVER + "/login";
  private CUSTOMER_URI:string = Config.API_SERVER + "/customers";
  private inqueryByCustomer:string = Config.API_SERVER + "/inquery/customer";
  private ordersByCustomer:string = Config.API_SERVER + "/orders/customer";
  private shoppingCart:string = Config.API_SERVER + "/shopping_cart_items"
 
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
    var  url = this.shoppingCart + '/' + customer_id;
    return this.http.get(url).map(response => response.json());
  }

  deleteShoppingCartItemById(id:number):Observable<any>  {
    var url = this.shoppingCart + '/' + id;
    return this.http.delete(url).map(response => response.json());
  }

  AddShoppingCartItem(customer_id:number, product_id:number, quantity:number, price:number, item_type:string):Observable<any>  {
    var url = this.shoppingCart;
    var shopping_item_cart = { 
      shopping_cart_item :{
        customer_entered_price: price,
        product_id: product_id,
        customer_id: customer_id,
        quantity: quantity,
        shopping_cart_type:item_type
      }
    }
    return this.http.post(url,shopping_item_cart).map(response => response.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }   
}
