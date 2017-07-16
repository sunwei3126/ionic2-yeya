import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactExpertsPage } from './contact-experts';

@NgModule({
  declarations: [
    ContactExpertsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactExpertsPage),
  ],
  exports: [
    ContactExpertsPage
  ]
})
export class ContactExpertsPageModule {}
