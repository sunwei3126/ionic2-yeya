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
  categoryData:Array<any>;
  topCategory:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoryData=[ 
      {name:"液压阀",  isSelect:true,  children:[
	     {name:"多路换向阀",img:"assets/img/products/test.jpeg", children:[{name:"整体多路阀"},{name:"片式多路阀"}]},
	     {name:"方向控制阀",img:"assets/img/products/test2.jpeg", children:[{name:"梭阀"},{name:"转阀"},{name:"球阀"},{name:"液压锁"},{name:"行程阀"},{name:"逻辑阀"},{name:"单向阀"},{name:"电磁球阀"},{name:"液控单向阀"},{name:"手动换向阀"},{name:"电磁换向阀"},{name:"液控换向阀"},{name:"电液换向阀"},{name:"其他换向阀"}]},
	     {name:"流量控制阀",img:"assets/img/products/test.jpeg", children:[{name:"整体多路阀"},{name:"片式多路阀"}]},
	     {name:"压力控制阀",img:"assets/img/products/test2.jpeg", children:[{name:"整体多路阀"},{name:"片式多路阀"}]},
	     {name:"特殊应用阀",img:"assets/img/products/test.jpeg"},
	     {name:"其他控制阀",img:"assets/img/products/test2.jpeg", children:[{name:"整体多路阀"},{name:"片式多路阀"}]},
	     {name:"比例阀与伺服阀",img:"assets/img/products/test.jpeg", children:[{name:"整体多路阀"},{name:"片式多路阀"}]}
	   ]},
      {name:"液压泵",  isSelect:false, children:[{name:"齿轮泵",img:"assets/img/products/test.jpeg", children:[{name:"外啮合齿轮泵"},{name:"内啮合齿轮泵"},{name:"其他齿轮泵"}]}] },
      {name:"液压马达", isSelect:false},
      {name:"快速接头", isSelect:false},
      {name:"阀用线圈", isSelect:false},
      {name:"测量元件", isSelect:false},
      {name:"液压软管", isSelect:false},
      {name:"液压密封", isSelect:false},
      {name:"其他元件", isSelect:false},
     ];
     //默认显示
     this.topCategory = this.categoryData[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogPage');
  }
   
  showSubCategories(item: any) {
    this.categoryData.forEach(item =>item.isSelect=false);
    item.isSelect=true;
    this.topCategory = item;
  }

  gotoSearchPage(item:any) {
   this.navCtrl.push("SearchPage",{name:item.name});
  }

}
