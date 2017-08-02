import { Observable } from 'rxjs/Observable';
import { Config } from './../config/config-service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BrandsService {
  private brandServiceURI:string = Config.API_SERVER + "/brands";
  constructor(public http: Http) {
  }
  
  getBrands(filterSpecification:any) :Observable<any> {
   return this.http.post(this.brandServiceURI, filterSpecification).map(res => res.json());
  }
  
}
