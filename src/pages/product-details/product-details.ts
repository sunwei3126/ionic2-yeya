import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
   count:number=0;
   product:any;
   quantity:number=0;
   loginType:any;
   commentList:any;//评论
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,private toastCtrl: ToastController) {
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
     this.storage.get('loginType').then((val) => {
          this.loginType = val;//登录状态
			if(this.loginType!=true){//如果没有登录 跳转到登录页面
				this.navCtrl.push( 'LoginPage' );
			}else{//已经登录
				//异步set 将此商品保存到数据库
				
				
				//保存成功以后  先提示"添加收藏成功"  进入我的收藏页面
				let toast = this.toastCtrl.create({
				    message: '添加收藏成功',
				    duration: 1000,
				    position: 'bottom'
				  });
				  toast.onDidDismiss(() => {
					this.navCtrl.push( 'CollectPage' );//提示消失后进入我的收藏页面
				  });
				  toast.present();
			}
     })
   }

  countOperator(operater:number) {
    this.count += operater;
  }
  //添加购物车
  addToCarts(product:any, count:number) {
	//判断是否登录
     this.storage.get('loginType').then((val) => {
          this.loginType = val;//登录状态
			if(this.loginType!=true){//如果没有登录 跳转到登录页面
				this.navCtrl.push( 'LoginPage' );
			}else{
  				//异步set 将此商品保存到数据库
				
				
				//保存成功以后  提示"添加购物车成功"
				let toast = this.toastCtrl.create({
				    message: '添加购物车成功',
				    duration: 1000,
				    position: 'bottom'
				  });
				  toast.onDidDismiss(() => {
					//提示消失后执行方法
				  });
				  toast.present();
			}
     })
  }
}
