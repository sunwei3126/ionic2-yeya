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
  selector: 'page-want-buy',
  templateUrl: 'want-buy.html',
})
export class WantBuyPage {
	formval:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.formval = this.getFormval();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WantBuyPage');
  }
  getFormval(){
  	return {
	    timeStarts: '2017-07-20',
	    timeEnds: '2017-07-21',
	    type:"液压阀",
	    brand:"Input val",
	    model:"Input val"
	  };
  }
}
