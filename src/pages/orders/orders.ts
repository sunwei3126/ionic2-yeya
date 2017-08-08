import { CustomerService } from './../../providers/customer/customer-service';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
	orders:any;
    constructor(public navCtrl: NavController,public customerService:CustomerService, public storage:Storage) {
    	this.getOrders();
	}

	ionViewDidLoad(){

	}

	getOrders(){
       this.storage.get("customer").then(customer => {
	    this.customerService.getOrdersByCustomerId(customer.id).subscribe(res=>{
			this.orders = res.orders;
	     	});
	   })
	}


	formatOrderStatus(status:string) {
	   if(status==="Pending") {
		   return "待处理";
	   }

	   if(status==="Complete") {
		   return "已完成";
	   }
	
	    if(status==="Cancelled") {
		   return "已取消";
	   }

       if(status==="Processing") {
		   return "处理中";
	   }
       return status;
	}
}
