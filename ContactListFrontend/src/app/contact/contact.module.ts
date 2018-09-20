import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './containers/contact/contact.component';
import { ContactSandbox } from './contact.sandbox';
import { ContactDialogComponent } from './containers/contact-dialog/contact-dialog.component';
import { ContactState } from './state/contact.state';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxsModule.forFeature([
      ContactState
    ]),
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
