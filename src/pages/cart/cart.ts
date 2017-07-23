import { Component } from '@angular/core';
import { NavController, IonicPage,AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
	goodsList:any;//购物车商品
	totalMoney:any;//商品总共价格
    constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    		this.goodsList = this.getGoodsList();
    		this.getTotalMoney();//计算商品总价
	}
	ionViewDidLoad(){
   	 console.log('ionViewDidLoad CartPage');
    }
	//获取购物车商品
	getGoodsList(){
		return [
			{id:1,productName:"比例阀与伺服阀",model:"xxxxx234234fe", price:500, num:2,total:1000, imageUrl:"assets/img/products/test2.jpeg" },
			{id:2,productName:"比例阀与伺服阀",model:"xxxxx234234fe", price:500, num:1,total:500, imageUrl:"assets/img/products/test.jpeg" },
			{id:3,productName:"比例阀与伺服阀",model:"xxxxx234234fe", price:500, num:4,total:2000, imageUrl:"assets/img/products/test2.jpeg" },
			{id:4,productName:"比例阀与伺服阀",model:"xxxxx234234fe", price:500, num:2,total:1000, imageUrl:"assets/img/products/test2.jpeg" },
			{id:5,productName:"比例阀与伺服阀",model:"xxxxx234234fe", price:500, num:1,total:500, imageUrl:"assets/img/products/test.jpeg" },
			{id:6,productName:"比例阀与伺服阀",model:"xxxxx234234fe", price:500, num:4,total:2000, imageUrl:"assets/img/products/test2.jpeg" },
		];
	}
	//从购物车移除
	removeItem(id){
		let prompt = this.alertCtrl.create({
	      title: '提示',
	      message: "确定将此商品从购物车中删除?",
	      buttons: [
	        {
	          text: '取消',
	          handler: data => {
	            console.log('Cancel clicked');
	          }
	        },
	        {
	          text: '确定',
	          handler: data => {
	          		//商品删除的代码
					for(let i = 0; i < this.goodsList.length; i++) {
				      if(this.goodsList[i].id == id){
				        this.goodsList.splice(i, 1);
				        this.getTotalMoney();//计算商品总价
				      }
			    		}
					//end
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
	      this.totalMoney += this.goodsList[i].price*this.goodsList[i].num
    		}
		this.totalMoney = this.totalMoney.toFixed(2);
	}
}
