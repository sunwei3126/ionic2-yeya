import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'brand-category',
  templateUrl: 'brand-category.html'
})
export class BrandCategoryComponent {
  categories: any;
  @Output("CategoryClick")CategoryClick:EventEmitter<Number> = new EventEmitter<Number>();
  constructor() {
    this.categories = this.getCategories();
  }

  getCategories():any {
   	return [{
  		id:1,
  		type1:"液压系统",
  		type2:"装备"
  	},{
  		id:2,
  		type1:"液压油缸",
  		type2:"液压马达"
  	},{
  		id:3,
  		type1:"液压工具",
  		type2:""
  	},{
  		id:4,
  		type1:"液压泵",
  		type2:"蓄能器"
  	},{
  		id:5,
  		type1:"液压阀",
  		type2:""
  	},{
  		id:6,
  		type1:"微型液压",
  		type2:""
  	},{
  		id:7,
  		type1:"液压附件",
  		type2:""
  	},{
  		id:8,
  		type1:"测量",
  		type2:"传感元件"
  	},{
  		id:9,
  		type1:"润滑",
  		type2:"冷却过滤"
  	}];
  }

  showCategory(category:any) {
   this.CategoryClick.emit(category);
  }
}