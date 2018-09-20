import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from '../contact/containers/contact/contact.component';
import { ContactModule } from '../contact/contact.module';
import { FeathersModule } from '../shared/plugins/feathers/feathers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ContactModule,
    FeathersModule.forRoot(),
    NgxsModule.forRoot([]),
    RouterModule.forRoot([
        { path: '', redirectTo: 'main', pathMatch: 'full' },
        { path: 'main', component: ContactComponent }
    ]),
    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
