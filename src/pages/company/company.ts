import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompanyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {
  companys:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.companys = this.getCompanys();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }
  getCompanys(){
  	return [{
  		name:"上海特格液压传动控制有限公司1",
  		url:"WWW.TRAGONPTC.COM",
  		tel:"021-61700611",
  		mainCore:"力士乐品牌 产品"
  	},{
  		name:"上海特格液压传动控制有限公司2",
  		url:"WWW.TRAGONPTC.COM",
  		tel:"021-61700611",
  		mainCore:"力士乐品牌 产品"
  	},{
  		name:"上海特格液压传动控制有限公司3",
  		url:"WWW.TRAGONPTC.COM",
  		tel:"021-61700611",
  		mainCore:"力士乐品牌 产品"
  	},{
  		name:"上海特格液压传动控制有限公司4",
  		url:"WWW.TRAGONPTC.COM",
  		tel:"021-61700611",
  		mainCore:"力士乐品牌 产品"
  	},{
  		name:"上海特格液压传动控制有限公司5",
  		url:"WWW.TRAGONPTC.COM",
  		tel:"021-61700611",
  		mainCore:"力士乐品牌 产品"
  	},{
  		name:"上海特格液压传动控制有限公司6",
  		url:"WWW.TRAGONPTC.COM",
  		tel:"021-61700611",
  		mainCore:"力士乐品牌 产品"
  	},{
  		name:"上海特格液压传动控制有限公司7",
  		url:"WWW.TRAGONPTC.COM",
  		tel:"021-61700611",
  		mainCore:"力士乐品牌 产品"
  	}];
  }
  //下拉刷新
  doRefresh(refresher) {
	     setTimeout(() => {
	       for (var i = 0; i < 3; i++) {
	         this.companys.unshift({
		  		name:"上海特格液压传动控制有限公司"+(this.companys.length+1),
		  		url:"WWW.TRAGONPTC.COM",
		  		tel:"021-61700611",
		  		mainCore:"力士乐品牌 产品"
		  	});
	      }
	      refresher.complete();
	    }, 2000);
  }
  //上拉加载
  doInfinite(refresher) {
	     setTimeout(() => {
	       for (var i = 0; i < 3; i++) {
	         this.companys.push({
		  		name:"上海特格液压传动控制有限公司"+(this.companys.length+1),
		  		url:"WWW.TRAGONPTC.COM",
		  		tel:"021-61700611",
		  		mainCore:"力士乐品牌 产品"
		  	});
	      }
	      refresher.complete();
	    }, 2000);
  }
}
