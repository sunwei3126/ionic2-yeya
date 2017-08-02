import { Storage } from '@ionic/storage';
import { CustomerService } from './../../providers/customer/customer-service';
import { CustomerProvider } from './../../providers/customer/customer';
import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController, Loading } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {
	addressList:any;
	customer:any;
    loading:Loading;
	constructor(public navCtrl: NavController, 
		public loadingCtl: LoadingController,
		public storage: Storage,
		public customerService:CustomerService) {
	  
	    this.loading = this.loadingCtl.create({
            content: '稍等...'
        });

	}
	ionViewDidLoad(){
		  this.loading.present();
		  this.storage.get('customer').then((val) => {
              this.customerService.GetCustomerById(val.id).subscribe(res=>{
				  this.loading.dismiss();
				  this.customer = res.customers[0];
				  this.addressList = this.customer.addresses;
			  });
         });
    }
	getAddressList(){
		return [{
			id:"1",
			platform:"平台",
			email:"look4hydraulics@126.net",
			company:"上海群美机电科技有限公司",
			tel:"021-59102026",
			fax:"",
			address:"北京市东城区 201821",
			exact:"嘉定工业区叶城路1630号5幢3301室",
		},{
			id:"2",
			platform:"平台",
			email:"look4hydraulics@126.net",
			company:"qe",
			tel:"qee",
			fax:"qeq",
			address:"天津市和平区 qe",
			exact:"qeqw",
		}];
	}
}
