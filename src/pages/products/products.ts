import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  title:string;
  products:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var item = navParams.data;
    this.title =item.name;

    this.products = [
                   {productName:"平衡阀", price:500, listPrice:800, stock:800, imageUrl:"assets/img/products/test.jpeg"},
                   {productName:"比例阀与伺服阀", price:500, listPrice:800, stock:800, imageUrl:"assets/img/products/test2.jpeg" },
                   {productName:"平衡阀", price:500, listPrice:800, stock:800, imageUrl:"assets/img/products/test.jpeg"},
                   {productName:"比例阀与伺服阀", price:500, listPrice:800, stock:800, imageUrl:"assets/img/products/test2.jpeg" },
                   {productName:"平衡阀", price:500, listPrice:800, stock:800, imageUrl:"assets/img/products/test.jpeg"},
                   {productName:"比例阀与伺服阀", price:500, listPrice:800, stock:800, imageUrl:"assets/img/products/test2.jpeg" },
                  ];
    console.log(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }
  
  goToProductDetail(product) {

  }
}
