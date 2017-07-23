import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
   this.product = navParams.get("product");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

   addToFavourite(product:any) {
   	//判断是否登录
     this.storage.get('loginType').then((val) => {
         console.log('Your age is', val);
          this.loginType = val;//登录状态
			if(this.loginType!=true){
				console.log("nicaicai"+this.loginType);
				this.navCtrl.push( 'LoginPage' );
			}else{
				//异步set
			}
     })
   }

  countOperator(operater:number) {
    this.count += operater;
  }

  addToCarts(product:any, count:number) {
	//判断是否登录
     this.storage.get('loginType').then((val) => {
         console.log('Your age is', val);
          this.loginType = val;//登录状态
			if(this.loginType!=true){
				this.navCtrl.push( 'LoginPage' );
			}else{
  				//异步set
			}
     })
  }
}
