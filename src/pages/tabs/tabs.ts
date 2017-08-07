import { IonicPage, Platform, NavController, Tabs, ToastController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabHome = "HomePage";
  tabCatalog = "CatalogPage";
  tabAbout = "AboutPage";

  itimer=null;
  
  @ViewChild("myTabs") tabs: Tabs
  backButtonPressed: boolean = false;

  constructor(public platform: Platform, public navCtl:NavController, public toastCtl: ToastController ) {
   setTimeout(() => {
    this.pageBack();
   }, 1000);
  }

  pageBack() {

    this.platform.registerBackButtonAction(():any => {
    let activeVC = this.navCtl.getActive();
    let page = activeVC.instance;
    
    if(!(page instanceof TabsPage)) {
       if(!this.navCtl.canGoBack()) {
         return this.showExit();
       }
       return this.navCtl.pop();
    }

    let tabs = page.tabs;
    let activeNav = tabs.getSelected();
     
    if(!activeNav.canGoBack()) {
      return this.showExit();
    }

     return activeNav.pop();
    }, 101);

  }

  showExit() {

  if(this.backButtonPressed) {
    this.platform.exitApp();
  } else {
  
   this.presentToast();
   this.backButtonPressed = true;

  if(this.itimer) {
    clearTimeout(this.itimer);
  }

  this.itimer = setTimeout(()=>{
    this.backButtonPressed =false}, 2000);
  }
}

presentToast() {
   let toast = this.toastCtl.create( {
     message: '再次点击退出APP',
     duration: 2000
   });
   toast.present();
 }

}
