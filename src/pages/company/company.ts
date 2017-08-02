import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyService } from "../../providers/company/company-service";

@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {

	companys:Array<any>;
	title:string;
  category:any;
	currentPage:number = 1;
	pageSize:number = 9;
	totalPages:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public companyService: CompanyService) {
  	this.category = this.navParams.get("category");
		this.title = `${this.category.type1} ${this.category.type2}`;
		this.getCompanys(this.currentPage);
  }

  ionViewDidLoad() {
	}
	
  getCompanys(page:number){
			let specfilter = {
		    brand_category: this.category.id,
		   	page: page,
		  	pageSize:this.pageSize,
	 	 }
     return new Promise(resolve => {
    	this.companyService.getCompanys(specfilter).subscribe(res => {
				if(!this.companys)
					this.companys=[];
				this.companys = this.companys.concat(res.company);
				this.totalPages = res.totalPages
				resolve();
			})});
	}
	
   //下拉刷新
  doRefresh(refresher) {
	    this.currentPage = 1;
			this.companys=[];
	    this.getCompanys(this.currentPage).then(()=>refresher.complete());
	}
		
  //上拉加载
  doInfinite(refresher) {
	 	this.currentPage++;
		if(this.currentPage > this.totalPages) {
			refresher.complete();
		} else {
		 this.getCompanys(this.currentPage).then(() => refresher.complete());
		}
	}
}
