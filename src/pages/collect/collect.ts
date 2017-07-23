import { Component } from '@angular/core';
import { NavController, IonicPage,AlertController,ItemSliding } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-collect',
  templateUrl: 'collect.html'
})
export class CollectPage {
	goodsList:any;//购物车商品
    constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    		this.goodsList = this.getGoodsList();
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
	//从收藏夹移除
	removeItem(id){
		let prompt = this.alertCtrl.create({
	      title: '提示',
	      message: "确定将此商品从收藏夹中删除?",
	      buttons: [
	        {
	          text: '取消',
	          handler: data => {
	            console.log('Cancel clicked');
	          }
	        },
	        {
	          text: '确认',
	          handler: data => {
	          		//商品删除的代码
					for(let i = 0; i < this.goodsList.length; i++) {
				      if(this.goodsList[i].id == id){
				        this.goodsList.splice(i, 1);
				      }
			    		}
					//end
	          }
	        }
	      ]
	    });
	    prompt.present();
	}
	//加入购物车
	addCart(slidingItem: ItemSliding,goods){
		let prompt = this.alertCtrl.create({
	      title: '提示',
	      message: "确定将此商品加入购物车?",
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
	          		//商品加入购物车代码
	          		this.addCartGoods(slidingItem,goods);
					//end
	          }
	        }
	      ]
	    });
	    prompt.present();
	}
	//提示
	addCartGoods(slidingItem,goods){
		let id = goods.id;//商品id
		let num = goods.num;//商品数量
		let alert = this.alertCtrl.create({ 
	        title: '提示!', 
	        subTitle: '商品加入购物车成功', 
	        buttons: [{
	          text: '确定',
	          handler: data => {
          		//左滑缩回
          		slidingItem.close();
				//end
	          }
	        }] 
	    }); 
	    alert.present(); 
	}
}