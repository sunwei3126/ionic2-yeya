import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: Array<any>;
  tabanimate:Boolean=false;
  old_scrollTop = 0;

  constructor(public navCtrl: NavController, public ref: ChangeDetectorRef) {
  this.products = [
                   {productName:"平衡阀", price:500, listPrice:800, stock:800, imageUrl:"assets/img/products/test.jpeg"},
                   {productName:"比例阀与伺服阀", price:500, listPrice:800, stock:800, imageUrl:"assets/img/products/test2.jpeg" },
                   {productName:"平衡阀", price:500, listPrice:800, stock:800, imageUrl:"assets/img/products/test.jpeg"},
                   {productName:"比例阀与伺服阀", price:500, listPrice:800, stock:800, imageUrl:"assets/img/products/test2.jpeg" },
                   {productName:"平衡阀", price:500, listPrice:800, stock:800, imageUrl:"assets/img/products/test.jpeg"},
                   {productName:"比例阀与伺服阀", price:500, listPrice:800, stock:800, imageUrl:"assets/img/products/test2.jpeg" },
                  ];
  }


  gotoCompanyShow() {
    this.navCtrl.push("CompanyPage");
  }

  gotoBrandShow() {
    this.navCtrl.push("BrandPage");
  }
  gotoWantBuyShow(){
    this.navCtrl.push("WantBuyPage");
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
