import { Storage } from '@ionic/storage';
import { CustomerService } from './../../providers/customer/customer-service';
import { Component } from '@angular/core';
import { NavController, IonicPage,AlertController,ItemSliding } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-collect',
  templateUrl: 'collect.html'
})
export class CollectPage {
	goodsList:Array<any>=[];
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public customerService:CustomerService, public storage:Storage) {
	}

	ionViewDidLoad(){
    this.getGoodsList();
	}
	
	//获取购物车商品
	getGoodsList(){
      this.storage.get("customer").then(customer => {
	    this.customerService.getShoppingCartByCustomerId(customer.id).subscribe(res=>{
				 this.goodsList = res.shopping_carts;
				 this.goodsList = this.goodsList.filter(cart => cart.shopping_cart_type==="Wishlist");
	     	});
	   })
	}

	//从收藏夹移除
	removeItem(slidingItem: ItemSliding, id:number){
		let prompt = this.alertCtrl.create({
	      title: '提示',
	      message: "确定将此商品从收藏夹中删除?",
	      buttons: [
	        {
	          text: '取消',
	          handler: data => {
							slidingItem.close();			
	          }
	        },
	        {
	          text: '确认',
						handler: data => {
							this.customerService.deleteShoppingCartItemById(id).subscribe(res=>{
								this.getGoodsList();
								slidingItem.close();
							})
						}					
	        }
	      ]
	    });
	    prompt.present();
	}
	//加入购物车
	addCart(slidingItem: ItemSliding,good: string):void{
		let prompt = this.alertCtrl.create({
	      title: '提示',
	      message: "确定将此商品加入购物车?",
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
	          		//商品加入购物车代码
								this.addCartGoods(slidingItem,good);
	          }
	        }
	      ]
	    });
	    prompt.present();
	}
	//提示
	addCartGoods(slidingItem:ItemSliding,good:any):void {
		let id = good.id;//商品id
		let num = good.num;//商品数量
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