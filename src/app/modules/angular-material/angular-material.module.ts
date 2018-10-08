import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatChipsModule,
  MatIconModule,
  MatExpansionModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
  ],
  declarations: []
})
export class AngularMaterialModule { }
