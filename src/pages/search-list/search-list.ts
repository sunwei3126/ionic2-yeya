import { CatalogService } from './../../providers/catalog/catalog-service';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { NavController, IonicPage ,NavParams} from 'ionic-angular';
import { Subject } from "rxjs/Subject";

@IonicPage()
@Component({
  selector: 'page-search-list',
  templateUrl: 'search-list.html'
})
export class SearchListPage {
	
	products: Array<any>;
	searchTerm$ = new Subject<string>();
	searchTerm:string;
	currentPage:number = 1;
	pageSize:number = 20;
	totalPages:number = 0;

	constructor(public navCtrl: NavController, 
		          public catalogService:CatalogService,
		          public navParams: NavParams) {

	  this.searchTerm$.subscribe(term => this.searchTerm = term);
		 this.catalogService.search(this.searchTerm$)
      .subscribe(results => {
				this.currentPage = 1,
				this.products = results.products;
				this.totalPages = results.totalPages;
      });
	}
	
  ionViewDidLoad() {
 }

 getProducts(page:number){
   return new Promise(resolve => {
    	this.catalogService.searchEntries(this.searchTerm, page, 20).subscribe(res => {
				this.products=this.products.concat(res.products);
				this.totalPages = res.totalPages
				resolve();
			})});
 }

  //上拉加载
  doInfinite(refresher) {
		this.currentPage++;
		if(this.currentPage > this.totalPages) {
			refresher.complete();
		} else {
		  this.getProducts(this.currentPage).then(()=>refresher.complete());
		}
	}
	
  gotoProductDetails(product:any){
    this.navCtrl.push("ProductDetailsPage", {product:product});
	}
	
  //发布求购
  gotoWantBuyPage(){
  	this.navCtrl.push("WantBuyPage");
	}
	
}
