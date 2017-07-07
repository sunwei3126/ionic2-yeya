import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name: string = "小李";
  base64Image: any = "http://www.gravatar.com/avatar?d=mm&s=140";
  
  constructor(public navCtrl: NavController) {

  }

  PersonalPage() {
   this.checkLogin();
  }

  myOrdersPage() {
   this.checkLogin();
  }

  myCartPage() {
   this.checkLogin();
  }

  myQueryPage() {
    this.checkLogin();
  }

  myCollectPage() {
    this.checkLogin();
  }

  mySettingPage() {
    this.checkLogin();
  }

  checkLogin() {
     this.navCtrl.push( 'LoginPage' );
  }
}
