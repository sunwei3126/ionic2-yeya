import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-companys-all',
  templateUrl: 'companys-all.html',
})
export class CompanysAllPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad()  {
  }

  gotoCompanys(category:any) {
    this.navCtrl.push("CompanyPage", {category: category});
  }
}
