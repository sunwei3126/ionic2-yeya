import { Config } from './../config/config-service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

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
  filterSpecification.fields="id, name, short_description, full_description, price, sku, stock_quantity, images, specs, totalPages, vendor_name, totalCount";
    return this.http.post(this.productsByCategoryURI, filterSpecification).map(response=>response.json());
  }

  getExperts(filterSpecification:any): Observable<any> {
    return this.http.post(this.expertsByCategoryURI,filterSpecification).map(response => response.json());
  }

  getPopularProducts(count:number): Observable<any> {
    var uri = this.popularProductURI +"?count=" + count;
    return this.http.get(uri).map(response => response.json());
  }

  search(terms:Observable<string>): Observable<any> {
     return terms.debounceTime(400)
                .filter(term =>term.length > 0)
                .distinctUntilChanged()
                .switchMap(term => this.searchEntries(term, 1, 20));
  }

  searchEntries(term:string, page:number, count:number) {
    var url = `${this.searchProductsURI}?term=${term}&page=${page}&count=${count}`;
     return this.http
        .get(url)
        .map(res => res.json());
  }

  createInquery(inquery:any) {
     return  this.http.post(this.inqueryCreateURI,inquery).map(response => response.json());
  }
}
