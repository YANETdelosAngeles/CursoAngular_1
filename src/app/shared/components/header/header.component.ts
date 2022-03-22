import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { shoppingCartService } from 'src/app/pages/contenido/products/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToCheckout():void{
    this.router.navigate(['/checkout']);
  }


}
