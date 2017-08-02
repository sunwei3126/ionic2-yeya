import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailsPage } from './product-details';
import { SafePipe } from '../../pipes/safe/safe';

@NgModule({
  declarations: [
    ProductDetailsPage,
    SafePipe
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailsPage),
  ],
  exports: [
    ProductDetailsPage
  ]
})
export class ProductDetailsPageModule {}
