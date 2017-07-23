import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {
	addressList:any;
    constructor(public navCtrl: NavController) {
    		this.addressList = this.getAddressList();
	}
	ionViewDidLoad(){
   	 console.log('ionViewDidLoad AddressPage');
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
