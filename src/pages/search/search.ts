import { Component } from '@angular/core';
import { NavController, IonicPage ,NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  name:any;
  products: Array<any>;
  item:any={
  	brad:0,//品牌
  	price:0,//价格
  	flow:0,//流量
  	pressureRange:0,//压力范围
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.name = navParams.get("name");
	this.products = this.getProducts();
  }
  ionViewDidLoad() {
  }
 getProducts(){
 	return [
       {productName:"平衡阀", price:500.00, imageUrl:"assets/img/products/test.jpeg"},
       {productName:"比例阀与伺服阀", price:500.00, imageUrl:"assets/img/products/test2.jpeg" },
       {productName:"平衡阀", price:500.00,imageUrl:"assets/img/products/test.jpeg"},
       {productName:"比例阀与伺服阀比例阀与伺服阀比例阀与伺服阀", price:500.00, imageUrl:"assets/img/products/test2.jpeg" },
       {productName:"平衡阀", price:500.00,imageUrl:"assets/img/products/test.jpeg"},
       {productName:"比例阀与伺服阀", price:500.00,imageUrl:"assets/img/products/test2.jpeg" },
      ];
 }
  //下拉刷新
  doRefresh(refresher) {
	     setTimeout(() => {
	       for (var i = 0; i < 3; i++) {
	         this.products.unshift({
	         	productName:"平衡阀平衡阀平衡阀平衡阀平衡阀"+(this.products.length+1),
	         	price:500.00,
	         	imageUrl:"assets/img/products/test.jpeg"
	         });
	      }
	      refresher.complete();
	    }, 2000);
  }
  //上拉加载
  doInfinite(refresher) {
	     setTimeout(() => {
	       for (var i = 0; i < 3; i++) {
	         this.products.push({
		  		productName:"平衡阀"+(this.products.length+1),
		  		price:500.00,
		  		imageUrl:"assets/img/products/test.jpeg"
		  	});
	      }
	      refresher.complete();
	    }, 2000);
  }
  gotoProductDetails(product:any){
    this.navCtrl.push("ProductDetailsPage", {product:product});
  }
  //点击品牌
  bradFun(e){
  	this.clear("brad");
  	if(this.item.brad==1){
  		this.item.brad=2;//由高到低
  	}else{
  		this.item.brad=1;//由低到高
  	}
  	this.check("brad",this.item.brad);
  }
  //价格
  priceFun(e){
  	this.clear("price");
  	if(this.item.price==1){
  		this.item.price=2;//由高到低
  	}else{
  		this.item.price=1;//由低到高
  	}
  	this.check("price",this.item.price);
  }
  //流量
  flowFun(e){
  	this.clear("flow");
  	if(this.item.flow==1){
  		this.item.flow=2;//由高到低
  	}else{
  		this.item.flow=1;//由低到高
  	}
  	this.check("flow",this.item.flow);
  }
  //压力范围
  pressureRangeFun(e){
  	this.clear("pressureRange");
  	if(this.item.pressureRange==1){
  		this.item.pressureRange=2;//由高到低
  	}else{
  		this.item.pressureRange=1;//由低到高
  	}
  	this.check("pressureRange",this.item.pressureRange);
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
		if(i!=name){
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
