import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from '../contact/containers/contact/contact.component';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ContactModule,
    RouterModule.forRoot([
        { path: '', redirectTo: 'main', pathMatch: 'full' },
        { path: 'main', component: ContactComponent }
    ]),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
