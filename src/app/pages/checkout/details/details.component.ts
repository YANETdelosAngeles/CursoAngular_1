import { Component, OnInit } from '@angular/core';
import { shoppingCartService } from '../../contenido/products/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  total$=this.shoppingCartSvc.totalActions$;
  cart$=this.shoppingCartSvc.cartActions$;
  constructor(private shoppingCartSvc:shoppingCartService) { }

  ngOnInit(): void {
  }

}
