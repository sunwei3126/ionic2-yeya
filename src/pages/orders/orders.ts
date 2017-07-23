import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
	orders:any;
    constructor(public navCtrl: NavController) {
    		this.orders = this.getOrders();
	}
	ionViewDidLoad(){
   	 console.log('ionViewDidLoad OrdersPage');
    }
	getOrders(){
		return [{
			id:"1",
			type:"已完成",
			time:"2017/7/20 21:05:43",
			money:"4036.99"
		},{
			id:"2",
			type:"已完成",
			time:"2017/7/20 21:05:43",
			money:"4036.99"
		},{
			id:"3",
			type:"已完成",
			time:"2017/7/22 21:05:43",
			money:"4036.99"
		},{
			id:"4",
			type:"已完成",
			time:"2017/7/23 21:05:43",
			money:"4036.99"
		},{
			id:"5",
			type:"已完成",
			time:"2017/7/25 21:05:43",
			money:"4036.99"
		},{
			id:"6",
			type:"已完成",
			time:"2017/7/26 21:05:43",
			money:"4036.99"
		}];
	}
}
