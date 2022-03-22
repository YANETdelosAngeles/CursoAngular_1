import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./pages/contenido/products/products.module').then(m => m.ProductsModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) }, // ruta products
  { path: 'gracias', loadChildren: () => import('./pages/checkout/gracias/gracias.module').then(m => m.GraciasModule) },
  { path: '', redirectTo: '/products' , pathMatch: 'full' },
  { path: '**', redirectTo: '' , pathMatch: 'full' } //una ruta que no pertenezca será redirigida al inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
