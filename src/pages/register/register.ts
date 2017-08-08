import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  phone:any="";
  code:string="";
  name:string="";
  email:string="";
  company:string="";
  pass:string="";
  rePass:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  }
  register(){
  	let ly = this.checkForm();
  	if(ly){
  		this.navCtrl.push("TabsPage");
  	}
  }
  checkForm(){
  	if(this.phone==""){
  		this.toast("请输入手机号!");
  		return false;
  	}
  	if(this.code==""){
  		this.toast("请输入验证码!");
  		return false;
  	}
  	if(this.name==""){
  		this.toast("请输入姓名!");
  		return false;
  	}
  	if(this.email==""){
  		this.toast("请输入邮箱!");
  		return false;
  	}
  	if(this.pass==""){
  		this.toast("请输入密码!");
  		return false;
  	}
  	if(this.rePass==""){
  		this.toast("请确认密码!");
  		return false;
  	}
  	if(this.pass!==this.rePass){
  		this.toast("密码和确认密码不一致!");
  		return false;
  	}
  	return true;
  }
  toast(txt){
  	let toast = this.toastCtrl.create({
	    message: txt,
	    duration: 3000,
	    position: 'bottom'
	  });
	  toast.onDidDismiss(() => {
	  	//提示消失运行方法
	  });
	  toast.present();
  }
}
