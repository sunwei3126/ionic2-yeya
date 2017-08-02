import { CustomerService } from './../../providers/customer/customer-service';
import { CatalogService } from './../../providers/catalog/catalog-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-want-buy',
  templateUrl: 'want-buy.html',
})
export class WantBuyPage {
  private inquery : FormGroup;
  private categoryOptions:Array<SelectOption>=[];
  private loading:Loading;

  constructor(public navCtrl: NavController, public formBuilder:FormBuilder, 
              public loadingCtrl:LoadingController,
              public alertCtrl:AlertController,
              public navParams: NavParams, public catalogService: CatalogService, public customerService:CustomerService) {

      this.inquery = this.formBuilder.group({
      valid_days: ['1'],
      title: ['', Validators.required],
      category_id: ['',Validators.required],
      brand: [''],
      sku: [''],
      quantity: ['',Validators.required],
    });
  }

  presentLoading() {
  this.loading = this.loadingCtrl.create({
        content: '发布中...'
      });
   this.loading.present();
  }

  ionViewDidLoad() {
    this.LoadCategoryOptions();
  }

  LoadCategoryOptions(){
   this.catalogService.getAllCatalogs().subscribe(res=>{
        let topCategories = res.categories;
        topCategories.forEach(levelOne => {
          this.categoryOptions.push({value:levelOne.id, label:levelOne.name}) 
           levelOne.sub_categories.forEach(levelTwo => {
             let prefix = levelOne.name + ">>";
             this.categoryOptions.push({value:levelTwo.id, label:prefix + levelTwo.name})
           });
        });
     })
   }

   postInquery() {
      this.presentLoading();
      var customer = this.customerService.customer;
      var newInquery = this.inquery.value;
      newInquery.customer_id = customer.id;
      this.catalogService.createInquery(newInquery).subscribe(res=>{
        this.loading.dismiss();
        if(res.created_result) {
          this.presentAlert(res.created_result);
        } else {
         this.presentAlert("求购创建成功!");
         this.navCtrl.pop();
        }
      });
  }

 presentAlert(msg:string) {
  let alert = this.alertCtrl.create({
    title: '求购',
    subTitle: msg,
    buttons: ['取消']
  });
  alert.present();
  }
}

export class SelectOption {
  value:string;
  label:string;
}
