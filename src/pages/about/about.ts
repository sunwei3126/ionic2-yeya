import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  birthdate: string;
  account: string = "profile";
  base64Image: any = "http://www.gravatar.com/avatar?d=mm&s=140";
  
  constructor(public navCtrl: NavController) {

  }

}
