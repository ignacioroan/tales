import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
  ],
  declarations: []
})
export class AngularMaterialModule { }
