import { Component } from '@angular/core';
import { NavController, IonicPage, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name: string = "未登录";
  base64Image: any = "http://www.gravatar.com/avatar?d=mm&s=140";
  loginType:any;
  islogin:Boolean=false;
  customer:any;
  constructor(public navCtrl: NavController,
     public events: Events,
     public storage: Storage) {
     this.loadLoginStatus();
  }

  ionViewDidLoad(){    
  this.events.subscribe('user:login', (name) => {
   this.loadLoginStatus();
  });
  }

  loadLoginStatus() {
     this.storage.get("loginType").then(value => this.islogin=value);
     this.storage.get("customer").then(value => {
      if(value){
         this.customer = value;
         this.name = this.customer.username;
         console.log(this.customer);
         console.log(this.islogin);
      } else {
        console.log('no value');
      }
     });
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

  gotologin(){
    if(!this.islogin) {
      this.navCtrl.push( 'LoginPage' );
    }
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
