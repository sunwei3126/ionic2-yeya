import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
   count:number=0;
   product:any;
   quantity:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.product = navParams.get("product");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

   addToFavourite(product:any) {

   }

  countOperator(operater:number) {
    this.count += operater;
  }

  addToCarts(product:any, count:number) {

  }
}
