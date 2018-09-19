import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports:[
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  declarations: []
})
export class SharedModule { }
