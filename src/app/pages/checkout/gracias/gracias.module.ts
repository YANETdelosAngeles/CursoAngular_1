import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraciasRoutingModule } from './gracias-routing.module';
import { GraciasComponent } from './gracias.component';


@NgModule({
  declarations: [
    GraciasComponent
  ],
  imports: [
    CommonModule,
    GraciasRoutingModule
  ]
})
export class GraciasModule { }
