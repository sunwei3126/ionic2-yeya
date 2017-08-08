import { CustomerService } from './../../providers/customer/customer-service';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-query',
  templateUrl: 'query.html'
})
export class QueryPage {
	querys:any;
	constructor(public navCtrl: NavController, public customerService:CustomerService, public storage:Storage) {
      this.getQuerys();
	}

	ionViewDidLoad(){
	}
	
	getQuerys(){
       this.storage.get("customer").then(customer => {
	    this.customerService.getInqueriesByCustomerId(customer.id).subscribe(res=>{
			this.querys = res.inqueries;
	     	});
	   })
	}
}
