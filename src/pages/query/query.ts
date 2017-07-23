import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-query',
  templateUrl: 'query.html'
})
export class QueryPage {
	querys:any;
    constructor(public navCtrl: NavController) {
    		this.querys = this.getQuerys();
	}
	ionViewDidLoad(){
   	 console.log('ionViewDidLoad QueryPage');
    }
	getQuerys(){
		return [{
			id:"1",
			name:"sdflsdjf",
			type:"sdf",
			brand:"sdfsdf",
			num:"20",
			time:"2017/7/20 21:05:43",
		},{
			id:"2",
			name:"sdflsdjf",
			type:"sdf",
			brand:"sdfsdf",
			num:"20",
			time:"2017/7/20 21:05:43",
		},{
			id:"3",
			name:"sdflsdjf",
			type:"sdf",
			brand:"sdfsdf",
			num:"20",
			time:"2017/7/20 21:05:43",
		},{
			id:"4",
			name:"sdflsdjf",
			type:"sdf",
			brand:"sdfsdf",
			num:"20",
			time:"2017/7/20 21:05:43",
		}];
	}
}
