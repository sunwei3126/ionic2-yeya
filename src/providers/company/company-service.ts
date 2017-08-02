import { Observable } from 'rxjs/Observable';
import { Config } from './../config/config-service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {
   private companyServiceURI:string = Config.API_SERVER + "/companys";
   
   constructor(public http: Http) {
  
  }

  getCompanys(filterSpecification:any) :Observable<any> {
   return this.http.post(this.companyServiceURI, filterSpecification).map(res => res.json());
  }
  
}
