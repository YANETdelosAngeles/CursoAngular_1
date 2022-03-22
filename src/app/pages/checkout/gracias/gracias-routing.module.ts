import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraciasComponent } from './gracias.component';

const routes: Routes = [{ path: '', component: GraciasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraciasRoutingModule { }
