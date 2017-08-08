import { SafeResourceUrl } from '@angular/platform-browser';
import { CatalogService } from './../../providers/catalog/catalog-service';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController, IonicPage ,NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-slist',
  templateUrl: 'slist.html'
})
export class SlistPage {
  category:any; 
	products: Array<any>;
	currentPage:number = 1;
	pageSize:number = 20;
	totalPages:number = 0;

  item:any={
  	name:0,//名称
  	price:0,//价格
  	stock:0,//库存
	}
	
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage, public catalogService:CatalogService) {
		this.storage.get('category').then((val) => {
         	this.category = val;
	 		this.getProducts(this.currentPage);
    		 })
	}
	
  ionViewDidLoad() {
 }
	
 getProducts(page:number){
	
		let specfilter = {
		  	category_id: this.category.id,
		   	page: page,
		  	pageSize:this.pageSize,
        sorts: []
	 	 }

			if(this.item.name == 1)  
				 specfilter.sorts.push({"field": "name", "dir":"asc"})

  	  if(this.item.name == 2)  
				 specfilter.sorts.push({"field": "name", "dir":"desc"})

			if(this.item.price == 1)  
				 specfilter.sorts.push({"field": "price", "dir":"asc"})

  	  if(this.item.price == 2)  
				 specfilter.sorts.push({"field": "price", "dir":"desc"})

			if(this.item.stock == 1)  
				 specfilter.sorts.push({"field": "stockQuantity", "dir":"asc"})

  	  if(this.item.stock == 2)  
				 specfilter.sorts.push({"field": "stockQuantity", "dir":"desc"})

     return new Promise(resolve => {
    	this.catalogService.getProductsByFilters(specfilter).subscribe(res => {
				if(!this.products)
					this.products=[];

				this.products=this.products.concat(res.products);
				this.totalPages = res.totalPages
				console.log(res);
				console.log("共有" + this.totalPages + "页")
				resolve();
			})});
 }
  //下拉刷新
  doRefresh(refresher) {
			this.currentPage = 1;
			this.products=null;
	    this.getProducts(this.currentPage).then(()=>refresher.complete());
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
	
  //名称
  nameFun(e){
  	this.clear("name");
  	if(this.item.name==1){
  		this.item.name=2;//由高到低
  	}else{
  		this.item.name=1;//由低到高
  	}
		this.check("name",this.item.name);
		this.currentPage = 1;
		this.products = null;
		this.getProducts(1);
	}
	
  //价格
  priceFun(e){
  	this.clear("price");
  	if(this.item.price == 1){
  		this.item.price = 2;//由高到低
  	}else{
  		this.item.price = 1;//由低到高
  	}
		this.check("price",this.item.price);
		this.currentPage = 1;
		this.products = null;
		this.getProducts(1);
  }

  //库存
   stockFun(e){
  	this.clear("stock");
  	if(this.item.stock==1){
  		this.item.stock=2;//由高到低
  	}else{
  		this.item.stock=1;//由低到高
  	}
		this.check("stock",this.item.stock);
		this.currentPage = 1;
		this.products = null;
		this.getProducts(1);
  }
  //check
  check(name,num){
	let up = document.getElementById(name).getElementsByClassName("up")[0];
	let down = document.getElementById(name).getElementsByClassName("down")[0];
  	if(num==1){
  		this.addClass(up,"red");
  		this.removeClass(down,"red");
  	}else{
  		this.addClass(down,"red");
  		this.removeClass(up,"red");
		}
  }
  //clear
  clear(name){
	for(let i in this.item){
		if(i != name){
		  	this.item[i] = 0;
		  	let btn = document.getElementById(i).getElementsByTagName("ion-icon");
		  	for(let j = 0;j<btn.length;j++){
		  		this.removeClass(btn[j],"red");
		  	}
	  	}
	 }
	}
	
  //search
  search(){
  	this.clear("");
  }
  //
  addClass(obj, cls){
    let obj_class = obj.className;//获取 class 内容.
    let blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
	let added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
	    obj.className = added;//替换原来的 class.
	}

  removeClass(obj, cls){
  	let obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
	    obj_class = obj_class.replace(/(\s+)/gi, ' ');//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
	let removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
	    removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
	    obj.className = removed;//替换原来的 class.
	}

  hasClass(obj, cls){
	 let obj_class = obj.className;//获取 class 内容.
	 let obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
	 let x:any;
     for(x in obj_class_lst) {
         if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
             return true;
         }
     }
     return false;
		}
		
  //发布求购
  gotoWantBuyPage(){
  	this.navCtrl.push("WantBuyPage");
	}
	
}
