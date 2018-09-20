import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './containers/contact/contact.component';
import { ContactSandbox } from './contact.sandbox';
import { ContactDialogComponent } from './containers/contact-dialog/contact-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    ContactComponent,
    ContactDialogComponent
  ],
  entryComponents: [
    ContactDialogComponent
  ],
  exports: [
    ContactComponent
  ],
  providers: [
    ContactSandbox
  ]
})
export class ContactModule { }
