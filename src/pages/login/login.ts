import { CustomerService } from './../../providers/customer/customer-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  name:string;
  pass:string;
  returnPage:string;
  loading:Loading;
  constructor(public navCtrl: NavController, 
    public loadingCtrl:LoadingController,
    public events: Events,
    public navParams: NavParams, public alertCtrl:AlertController, public storage: Storage, public customerService:CustomerService) {
  
    this.returnPage = navParams.get('returnUrl');
  }

  ionViewDidLoad() {

  }

  login() {
    this.presentLoading();
    this.customerService.Login(this.name,this.pass).subscribe(res=>{
        this.loading.dismiss();
        if(res.customer) {
            this.customerService.customer = res.customer;
            this.storage.set('loginType', true);//登录状态
            this.storage.set('customer', res.customer)
            this.navCtrl.pop(); //返回上一页
        } else {
            this.storage.set('loginType', false);
            this.presentAlert(res.login_result)
        }

        this.events.publish("user:login", this.name);

      }
    )
  }

  presentLoading() {
  this.loading = this.loadingCtrl.create({
        content: '登录中...'
      });
   this.loading.present();
  }

  presentAlert(errMsg:string) {
  let alert = this.alertCtrl.create({
    title: '登录',
    subTitle: errMsg,
    buttons: ['取消']
  });
  alert.present();
}
  gotoForgotPassPage(){
	 this.navCtrl.push("ForgotPassPage");
  }
  gotoRegisterPage(){
	 this.navCtrl.push("RegisterPage");
  }
}
