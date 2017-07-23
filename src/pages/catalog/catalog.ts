import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CatalogPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-catalog',
  templateUrl: 'catalog.html',
})
export class CatalogPage {
 topCategories:Array<any>;
  topCategory:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
   
  }
  ionViewDidLoad() {
     this.http.get("http://localhost:15536/api/categories").subscribe(res => {
        var root = res.json();
        this.topCategories = root.categories;
        var initialItem = this.topCategories[0];
        this.showSubCategories(initialItem)
      })
  }
   
  showSubCategories(item: any) {
    this.topCategories.forEach(item =>item.isSelect=false);
    item.isSelect=true;
    this.topCategory = item;
  }

  gotoSearchPage(item:any) {
   this.navCtrl.push("SearchPage",{name:item.name});
  }

}
