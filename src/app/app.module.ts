import { CustomerService } from './../providers/customer/customer-service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http' 
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CatalogService } from '../providers/catalog/catalog-service';
import { BrandsService } from '../providers/brands/brands-service';
import { CompanyService } from '../providers/company/company-service';
//import { SlistPage } from '../pages/slist/slist';

@NgModule({
  declarations: [
    MyApp,
    //SlistPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
       tabsHideOnSubPages: true
    }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   //SlistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     CatalogService,
     BrandsService,
     CompanyService,
     CustomerService
  ]
})
export class AppModule {}
