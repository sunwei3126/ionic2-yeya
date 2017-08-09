import { Storage } from '@ionic/storage';
import { CustomerService } from './../../providers/customer/customer-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot-pass.html',
})
export class ForgotPassPage {
  email:string;  
  constructor(public navCtrl: NavController, 
     public alertCtrl:AlertController, 
     public customerService:CustomerService,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  presentAlert(msg:string) {
  let alert = this.alertCtrl.create({
    title: '找回密码',
    subTitle: msg,
    buttons: ['确定']
  });
  alert.present();
 }

 change() {
  if(!this.email) {
    this.presentAlert("电子邮箱不能为空！");
    return;
  } else {
   if(this.isEmail(this.email.trim())) {
        this.customerService.passwordRecovery(this.email).subscribe(res=> {
           if(res.created_result) {
             this.presentAlert(res.created_result)
             this.navCtrl.push("TabsPage");
             return;
           } else {
              this.navCtrl.pop();
           }
        });
    } else {
      this.presentAlert("电子邮箱格式错误，请检查！")
      return;
    }
  }
 }

 isEmail(email:string):boolean {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
 };

}
