import { CustomerService } from './../../providers/customer/customer-service';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-change-pass',
  templateUrl: 'change-pass.html',
})
export class ChangePassPage {
  pass:string;
  rePass:string;
  rePass2:string;
  loading:Loading;
  constructor(public navCtrl: NavController, public storage:Storage, 
         public customerService:CustomerService,
         public alertCtrl:AlertController,
         public loadingCtrl:LoadingController,
         public navParams: NavParams) {
  }

 ionViewDidLoad() {

 }

 presentAlert(msg:string) {
  let alert = this.alertCtrl.create({
    title: '修改密码',
    subTitle: msg,
    buttons: ['确定']
  });

  alert.present();
 }

  presentLoading() {
  this.loading = this.loadingCtrl.create({
        content: '请稍后...'
      });
     this.loading.present();
  }

  ok() {
   this.storage.get('customer').then(customer => {
     if(customer) {
      if(!this.rePass || !this.rePass2) {
        this.presentAlert("密码不能为空!");
        return;
      }
      if(this.rePass.trim() !== this.rePass2.trim()) {
        this.presentAlert('两次输入的密码不一致！');
        return;
      }
      this.presentLoading();
      this.customerService.ChangeCustomerPassword(customer.id, this.rePass).subscribe(res => {
         this.loading.dismiss();
         this.navCtrl.pop();
       });
      } else {
        this.navCtrl.push("LoginPage");
      }
    }) 
  }
}
