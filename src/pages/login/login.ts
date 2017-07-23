import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  name:string;
  pass:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
	 this.storage.set('loginType', true);//登录状态
	 this.navCtrl.pop();//返回上一页
  }
  gotoForgotPassPage(){
	 this.navCtrl.push("ForgotPassPage");
  }
  gotoRegisterPage(){
	 this.navCtrl.push("RegisterPage");
  }
}
