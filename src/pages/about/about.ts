import { Component } from '@angular/core';
import { NavController, IonicPage} from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name: string = "小李";
  base64Image: any = "http://www.gravatar.com/avatar?d=mm&s=140";
  loginType:any;
  constructor(public navCtrl: NavController,public storage: Storage) {
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad AboutPage');
  }

  //我的订单
  myOrdersPage() {
  	this.checkLogin('OrdersPage',null);
  }
  //购物车
  myCartPage() {
  	this.checkLogin('CartPage',null);
  }
  //我的求购
  myQueryPage() {
  	this.checkLogin('QueryPage',null);
  }
  //地址簿
  myAddressPage(){
  	this.checkLogin('AddressPage',null);
  }
  //我的收藏
  myCollectPage() {
  	this.checkLogin('CollectPage',null);
  }
  //修改密码
  gotoChangePassPage(){
  	this.checkLogin('ChangePassPage',null);
  }
  //判断是否登录
  checkLogin(page,sub) {
     //this.navCtrl.push( 'ChangePassPage' );
     this.storage.get('loginType').then((val) => {
          this.loginType = val;//登录状态
			if(this.loginType!=true){
				this.navCtrl.push( 'LoginPage' );
			}else{
				if(page!=null){
  					this.navCtrl.push(page,sub);
				}
			}
     })
  }
}
