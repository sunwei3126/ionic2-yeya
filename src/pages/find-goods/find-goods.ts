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
  selector: 'page-find-goods',
  templateUrl: 'find-goods.html',
})
export class FindGoodsPage {
	findGoods:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.findGoods = this.getFindGoods();
  }

  ionViewDidLoad() {
  }
  getFindGoods(){
  	return [{
  		id:1,
  		type1:"叶片泵",
  		type2:"叶片马达"
  	},{
  		id:2,
  		type1:"柱塞泵",
  		type2:"柱塞马达"
  	},{
  		id:3,
  		type1:"齿轮泵",
  		type2:"齿轮马达"
  	},{
  		id:4,
  		type1:"多路阀",
  		type2:"手动泵"
  	},{
  		id:5,
  		type1:"板式阀",
  		type2:"叠加阀"
  	},{
  		id:6,
  		type1:"插装阀",
  		type2:"管式阀"
  	},{
  		id:7,
  		type1:"比例阀",
  		type2:"伺服阀"
  	},{
  		id:8,
  		type1:"液压附件",
  		type2:"润滑冷却"
  	},{
  		id:9,
  		type1:"疑难",
  		type2:"杂症"
  	}];
  }
  gotoContactExpertsShow(id){
  	 this.navCtrl.push("ContactExpertsPage", {id:id});
  }
}
