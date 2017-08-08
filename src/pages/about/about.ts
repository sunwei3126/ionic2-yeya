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
  cartNum:number=2;//购物车数量
  
  constructor(public navCtrl: NavController,
     public events: Events,
     public storage: Storage) {
     this.loadLoginStatus(); 
     this.events.subscribe('user:login', (name) => {
       this.loadLoginStatus();
     });
  }

  ionViewDidLoad(){    

  }

  loadLoginStatus() {
     this.storage.get("customer").then(value => {
      if(value){
         this.customer = value;
         this.islogin = true;
         this.name = this.customer.username;
     	   this.storage.set('loginType', true);
         console.log(this.customer);
         console.log(this.islogin);
      } else {
        this.islogin =false;
    		this.storage.set('loginType', false);
        console.log('no value');
        this.name = "未登录";
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
     this.navCtrl.push( 'LoginPage' );
  }

  logout() {
    this.storage.remove("loginType");
    this.storage.remove("customer");
    this.loadLoginStatus();
  }

  //判断是否登录
  checkLogin(page,sub) {
     this.storage.get('loginType').then((val) => {
          this.loginType = val;//登录状态
			if(this.loginType!=true){
				this.navCtrl.push('LoginPage' );
			}else{
				if(page!=null){
  					this.navCtrl.push(page,sub);
				}
			}
     })
  }
}
