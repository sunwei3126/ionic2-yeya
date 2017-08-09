import { CustomerService } from './../../providers/customer/customer-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  phone:string="";
  code:string="";
  name:string="";
  email:string="";
  company:string="";
  pass:string="";
  rePass:string="";
  canSend:boolean = true;
  curCount:number = 120;
  sendTitle:string ="发送手机验证码";
  interObj:any;
  constructor(public navCtrl: NavController, 
	public navParams: NavParams,
	public alertCtrl:AlertController,
	public customerService:CustomerService,
	private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
 }

 presentAlert(msg:string) {
  let alert = this.alertCtrl.create({
    title: '注册' ,
    subTitle: msg,
    buttons: ['确定']
   });
  alert.present();
 }

  register(){
  	let ly = this.checkForm();
  	if(ly){
        var customer= {
		   userName: this.phone,
		   email:this.email,
		   password:this.pass,
		   confirmPassword:this.rePass,
		   checkNumber:this.code,  
		   firstName: this.name,
		   company:this.company
		}
		this.customerService.register(customer).subscribe(res => {
			if(res.length > 0){
			   this.toast(res.join("\r\n"));
			} else {
		       this.navCtrl.push("TabsPage");
			}
	      }
		)
  	 }
  }

  checkForm(){
  	if(!this.phone){
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

  sendMsg():void {
    if (!this.phone) {
      this.presentAlert('电话号码不能为空');
      return;
    }
		
    if (! /^1[34578][0-9]\d{8}$/.test(this.phone)) {
      this.presentAlert('电话号码格式不正确');
      return;
	}
	
	this.customerService.sendCheckNumber(this.phone).subscribe(res=>{
		//this.presentAlert(res.toString());
	})

	this.curCount =120;
	this.canSend = false;
    this.interObj = setInterval(() => {
	 
     if(this.curCount == 0) {
		 this.canSend =true;
		 clearInterval(this.interObj);
         this.sendTitle="重新发送验证码";
	 } else {
		this.curCount--;
		this.sendTitle=`请在${this.curCount} 秒内输入验证码`;
	 } 
	}, 1000); 
  }
}
