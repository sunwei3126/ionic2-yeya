import { CatalogService } from './../../providers/catalog/catalog-service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products: Array<any>;
  tabanimate:Boolean=false;
  old_scrollTop = 0;

  constructor(public navCtrl: NavController, public ref: ChangeDetectorRef, public catalogService:CatalogService, public storage:Storage) {
    this.catalogService.getPopularProducts(10).subscribe(res=>this.products = res.products);
  }

  gotoCompanyShow() {
    this.navCtrl.push("CompanysAllPage");
  }

  gotoBrandShow() {
    this.navCtrl.push("BrandsAllPage");
  }

  gotoWantBuyShow(){
     this.storage.get('loginType').then(val => {
			if(val != true){
				this.navCtrl.push( 'LoginPage' );
			}else{
		    this.navCtrl.push("WantBuyPage");
			}
    });
  }

  gotoFindGoodsShow(){
    this.navCtrl.push("FindGoodsPage");
  }

  onScroll($event: any) {
    var scrollTop = $event.scrollTop;
    if (scrollTop > 50 && (this.old_scrollTop - scrollTop) < 0) {
      if(!this.tabanimate) {
        this.tabanimate = true;
        console.log(this.tabanimate);
      }
    } else {
      this.tabanimate =false;
      console.log(this.tabanimate);
    }
    this.old_scrollTop = scrollTop;
    this.ref.detectChanges();
  }

  gotoProductDetails(product:any)
  {
    this.navCtrl.push("ProductDetailsPage", {product:product});
  }

}
