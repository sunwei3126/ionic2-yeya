import { CatalogService } from './../../providers/catalog/catalog-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact-experts',
  templateUrl: 'contact-experts.html',
})
export class ContactExpertsPage {

    title:string;
	category:any;
	experts:Array<any>;
	currentPage:number = 1;
	pageSize:number = 9;
	totalPages:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public catelogService:CatalogService) {
	  this.category = navParams.get("category");
	  this.title = `${this.category.type1} ${this.category.type2}`; 
  	  this.getExperts(this.currentPage);
  }

  ionViewDidLoad() {
  }

  getExperts(page:number){
			let specfilter = {
		    category: this.category.id,
		   	page: page,
		  	pageSize:this.pageSize,
	 	 }
     return new Promise(resolve => {
    	this.catelogService.getExperts(specfilter).subscribe(res => {
				if(!this.experts)
					this.experts=[];
				this.experts = this.experts.concat(res.experts);
				this.totalPages = res.totalPages
				resolve();
			})});
	   }
	

  //下拉刷新
  doRefresh(refresher) {
	    this.currentPage = 1;
	    this.experts=[];
	    this.getExperts(this.currentPage).then(()=>refresher.complete());
	}
		
  //上拉加载
  doInfinite(refresher) {
	 	this.currentPage++;
		if(this.currentPage > this.totalPages) {
			refresher.complete();
		} else {
		 this.getExperts(this.currentPage).then(() => refresher.complete());
		}
	}

 /* getExperts(){
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
  		img:"https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=101",
  		goodAt:"柱塞泵、技术支持",
  		phone:"132****3454",
  		phoneAll:"1322223454",
  		wx:"weixinhao",
  		qq:"34543534"
  	},{
  		name:"张工3",
  		img:"https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=102",
  		goodAt:"柱塞泵、技术支持",
		phone:"132****3454",
  		phoneAll:"1322223454",
  		wx:"weixinhao",
  		qq:"34543534"
  	},{
  		name:"张工4",
  		img:"https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=103",
  		goodAt:"柱塞泵、技术支持",
  		phone:"132****3454",
  		phoneAll:"1322223454",
  		wx:"weixinhao",
  		qq:"34543534"
  	}];
  }*/
}
