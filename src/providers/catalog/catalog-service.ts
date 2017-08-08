import { Observable } from 'rxjs/Observable';
import { Config } from './../config/config-service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {

  private catalogServiceURI:string = Config.API_SERVER + "/categories";
  private productsByCategoryURI:string = Config.API_SERVER + "/products";
  private expertsByCategoryURI:string = Config.API_SERVER + "/experts";
  private popularProductURI:string = Config.API_SERVER + "/products_top";
  private searchProductsURI: string = Config.API_SERVER + "/search";
  private inqueryCreateURI:string = Config.API_SERVER + "/inquery";

  constructor(public http: Http) {
  }

  getAllCatalogs(): Observable<any> {
     return this.http.get(this.catalogServiceURI).map(response=>response.json());
  }

  getProductsByFilters(filterSpecification:any): Observable<any> {
  filterSpecification.fields="id, name, short_description, full_description, price, sku, stock_quantity, images, specs, totalPages, totalCount";
    return this.http.post(this.productsByCategoryURI, filterSpecification).map(response=>response.json());
  }

  getExperts(filterSpecification:any): Observable<any> {
    return this.http.post(this.expertsByCategoryURI,filterSpecification).map(response => response.json());
  }

  getPopularProducts(count:number): Observable<any> {
    var uri = this.popularProductURI +"?count=" + count;
    return this.http.get(uri).map(response => response.json());
  }

  search(term:string): Observable<any> {
    var uri = this.searchProductsURI +"?q=" + term;
    return this.http.get(uri).map(response => response.json());
  }

  createInquery(inquery:any) {
     return  this.http.post(this.inqueryCreateURI,inquery).map(response => response.json());
  }
}
