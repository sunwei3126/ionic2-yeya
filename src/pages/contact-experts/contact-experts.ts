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
  selector: 'page-contact-experts',
  templateUrl: 'contact-experts.html',
})
export class ContactExpertsPage {
	id:number;
	experts:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.id = navParams.get("id");
  	this.experts = this.getExperts();
  }

  ionViewDidLoad() {
  }
  getExperts(){
  	return [{
  		name:"张工1",
  		img:"https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
  		goodAt:"柱塞泵、技术支持",
  		phone:"132****3454",
  		phoneAll:"1322223454",
  		wx:"weixinhao",
  		qq:"34543534"
  	},{
  		name:"张工2",
  		img:"https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
  		goodAt:"柱塞泵、技术支持",
  		phone:"132****3454",
  		phoneAll:"1322223454",
  		wx:"weixinhao",
  		qq:"34543534"
  	},{
  		name:"张工3",
  		img:"https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
  		goodAt:"柱塞泵、技术支持",
  		phone:"132****3454",
  		phoneAll:"1322223454",
  		wx:"weixinhao",
  		qq:"34543534"
  	},{
  		name:"张工4",
  		img:"https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
  		goodAt:"柱塞泵、技术支持",
  		phone:"132****3454",
  		phoneAll:"1322223454",
  		wx:"weixinhao",
  		qq:"34543534"
  	}];
  }
}
