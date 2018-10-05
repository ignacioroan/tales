import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatChipsModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
  ],
  declarations: []
})
export class AngularMaterialModule { }
