import { CustomerService } from './../../providers/customer/customer-service';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController, ItemSliding } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
	goodsList:Array<any>=[];
	totalMoney:any;//商品总共价格
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public storage:Storage, public customerService:CustomerService) {
	}

	ionViewDidLoad(){
	  this.getGoodsList();
	}
		
	//获取购物车商品
	getGoodsList(){
		  this.storage.get("customer").then(customer => {
	    this.customerService.getShoppingCartByCustomerId(customer.id).subscribe(res=>{
				 this.goodsList = res.shopping_carts;
				 this.goodsList = this.goodsList.filter(cart => cart.shopping_cart_type==="ShoppingCart");
					this.getTotalMoney();
	     	});
	   })
	}

	//从购物车移除
	removeItem(slidingItem: ItemSliding, id:number) :void {
		let prompt = this.alertCtrl.create({
	      title: '提示',
	      message: "确定将此商品从购物车中删除?",
	      buttons: [
	        {
	          text: '取消',
	          handler: data => {
	          	slidingItem.close();
	          }
	        },
	        {
	          text: '确定',
	          handler: data => {
					  	this.customerService.deleteShoppingCartItemById(id).subscribe(res => {
								this.getGoodsList();
								slidingItem.close();
							})
	          }
	        }
	      ]
	    });
	    prompt.present(); 
	}

	//购物车商品总价
	getTotalMoney(){
		this.totalMoney = 0;
		for(let i = 0; i < this.goodsList.length; i++) {
	      this.totalMoney += this.goodsList[i].customer_entered_price * this.goodsList[i].quantity;
  	}
		this.totalMoney = this.totalMoney.toFixed(2);
	}

	submitOrder(): void {

	}
}
