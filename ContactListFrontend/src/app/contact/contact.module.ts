import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './containers/contact/contact.component';
import { ContactSandbox } from './contact.sandbox';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ContactComponent
  ],
  exports: [
    ContactComponent
  ],
  providers: [
    ContactSandbox
  ]
})
export class ContactModule { }
