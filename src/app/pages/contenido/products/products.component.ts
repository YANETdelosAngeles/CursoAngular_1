import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './interface/product.interface';
import { ProductsService } from './services/products.service';
import { shoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  title="Productos"
  constructor(private productSvc: ProductsService,private shoppingcartSvc:shoppingCartService) { }

  ngOnInit(): void {
    /*this.productSvc.getProducts().pipe(
      tap((products:Product[])=>this.products = products)
    ).subscribe;*/ //no sirve

    this.productSvc.getProducts().subscribe((res)=>{
      this.products=res;
    });

  }

  addToCard(product:Product): void{
    //console.log("AddToCard: ",product);
    this.shoppingcartSvc.updateCart(product);
  }

}
