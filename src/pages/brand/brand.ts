import { BrandsService } from './../../providers/brands/brands-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-brand',
  templateUrl: 'brand.html',
})
export class BrandPage {
  brands:Array<any>;
	
	title:string;
  category:any;
	currentPage:number = 1;
	pageSize:number = 8;
	totalPages:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public brandService:BrandsService) {
		this.category = this.navParams.get("category");
		this.title = `${this.category.type1} ${this.category.type2}`;
		this.getBrands(this.currentPage);
	}
	
  ionViewDidLoad() {
		
	}
	
  getBrands(page:number){
			let specfilter = {
		    brand_category: this.category.id,
		   	page: page,
		  	pageSize:this.pageSize,
	 	 }
     return new Promise(resolve => {
    	this.brandService.getBrands(specfilter).subscribe(res => {
				if(!this.brands)
					this.brands=[];
				this.brands=this.brands.concat(res.brands);
				this.totalPages = res.totalPages
				resolve();
			})});
	}
	
   //下拉刷新
  doRefresh(refresher) {
	    this.currentPage = 1;
			this.brands=[];
	    this.getBrands(this.currentPage).then(()=>refresher.complete());
	}
		
  //上拉加载
  doInfinite(refresher) {
	 	this.currentPage++;
		if(this.currentPage > this.totalPages) {
			refresher.complete();
		} else {
		 this.getBrands(this.currentPage).then(() => refresher.complete());
		}
	}
	
}
