import { CustomerService } from './../../providers/customer/customer-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/catch';
@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
   count:number = 1;
   product:any;
   quantity:number = 0;
   loginType:any;
	 commentList:any;//评论
	 
	constructor(public navCtrl: NavController, 
							public navParams: NavParams, 
							public customerService:CustomerService,
							public storage: Storage, 
							private toastCtrl: ToastController) {
   this.product = navParams.get("product");
   this.commentList = this.getCommentList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
	}
	
  //评论
  getCommentList(){
  	return [{
  		name:"小猫1",
  		img:"assets/img/products/default-image.png",
  		start:"assets/img/start/start5.jpg",
  		data:"2017/08/23 12:12:12",
  		content:"这个真的不错，性价比高质量好，强烈推荐，666"
  	},{
  		name:"小猫2",
  		img:"assets/img/products/default-image.png",
  		start:"assets/img/start/start3.jpg",
  		data:"2017/08/23 12:12:12",
  		content:"这个真的不错，性价比高质量好，强烈推荐，666"
  	},{
  		name:"小猫3",
  		img:"assets/img/products/default-image.png",
  		start:"assets/img/start/start0.jpg",
  		data:"2017/08/23 12:12:12",
  		content:"这个真的不错，性价比高质量好，强烈推荐，666"
  	}];
  }
   //添加收藏
   addToFavourite(product:any) {
   	//判断是否登录
     this.storage.get('customer').then((customer) => {
			if(!customer){//如果没有登录 跳转到登录页面
			  this.loginType=false;
				this.navCtrl.push( 'LoginPage' );
			}else{
        this.loginType=true;
				this.customerService.AddShoppingCartItem(customer.id, product.id,this.count,this.product.price,"Wishlist").subscribe(res=>{	
					 this.showResult('添加收藏成功',1000, "CollectPage");
				}
		 	, res=>{
			  	res = res.json();
					var errorMsg = this.formateErrorMessage(res.errors);
					this.showResult(errorMsg, 5000,null);
			  });	 
	  	}
  	})
	}

	showResult(message:string, duration:number, page:string):void {
				let toast = this.toastCtrl.create({
				    message: message,
				    duration: duration,
				    position: 'bottom'
				  });
				  toast.onDidDismiss(() => {
						if(page) {
						  this.navCtrl.push(page);
						}
				  });
				toast.present();
  	}

	formateErrorMessage(errors:any):string {
		var errorList:Array<string>=[];
				 if(errors) {
					  for (var key in errors) {
							if (errors.hasOwnProperty(key)) {
								var values = errors[key];
                 errorList.push(...values)
							}
						}
			 }
	  	return	errorList.join('\r\n')
  	}

  countOperator(operater:number) {
		this.count += operater;
		if(this.count < 1)
			this.count = 1;

		if(this.count > this.product.stock_quantity)
				this.count = this.product.stock_quantity;
	}
	
  //添加购物车
  addToCarts(product:any, count:number) {
     this.storage.get('customer').then((customer) => {
			if(!customer){//如果没有登录 跳转到登录页面
			  this.loginType=false;
				this.navCtrl.push( 'LoginPage' );
			}else{
        this.loginType=true;
				this.customerService.AddShoppingCartItem(customer.id, product.id,this.count,this.product.price,"ShoppingCart").subscribe(res=>{	
					this.showResult('添加购物车成功',1000,"CartPage");
				}, (res)=>{
				  res = res.json();
					var errorMsg = this.formateErrorMessage(res.errors);
					this.showResult(errorMsg, 5000,null);
				});
			}
	  })
  }
}
