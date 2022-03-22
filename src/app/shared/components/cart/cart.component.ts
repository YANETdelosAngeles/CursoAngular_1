import { Component, OnInit } from '@angular/core';
import { shoppingCartService } from 'src/app/pages/contenido/products/services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  constructor( private shoppintCartSvc: shoppingCartService ) { }

  quantity$ = this.shoppintCartSvc.quatityActions$;
  total$ = this.shoppintCartSvc.totalActions$;
  cart$ = this.shoppintCartSvc.cartActions$;

  ngOnInit(): void {
  }

}
