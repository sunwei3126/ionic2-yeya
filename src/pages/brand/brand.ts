import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BrandPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-brand',
  templateUrl: 'brand.html',
})
export class BrandPage {
  brands:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.brands = this.getBrands();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandPage');
  }
  getBrands(){
  	return [{
  		id:1,
  		img:'assets/img/brand/brand.jpg'
  	},{
  		id:2,
  		img:'assets/img/brand/brand.jpg'
  	},{
  		id:3,
  		img:'assets/img/brand/brand.jpg'
  	},{
  		id:4,
  		img:'assets/img/brand/brand.jpg'
  	},{
  		id:5,
  		img:'assets/img/brand/brand.jpg'
  	},{
  		id:6,
  		img:'assets/img/brand/brand.jpg'
  	}]
  }
   //下拉刷新
  doRefresh(refresher) {
	     setTimeout(() => {
	       for (var i = 0; i < 3; i++) {
	         this.brands.unshift({
		  		id:(this.brands.length+1),
		  		img:'assets/img/brand/brand.jpg'
		  	});
	      }
	      refresher.complete();
	    }, 2000);
  }
  //上拉加载
  doInfinite(refresher) {
	     setTimeout(() => {
	       for (var i = 0; i < 3; i++) {
	         this.brands.push({
		  		id:(this.brands.length+1),
		  		img:'assets/img/brand/brand.jpg'
		  	});
	      }
	      refresher.complete();
	    }, 2000);
  }
}
