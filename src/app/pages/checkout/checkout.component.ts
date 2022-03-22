import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Details, Order } from '../contenido/products/interface/order.interface';
import { Product } from '../contenido/products/interface/product.interface';
import { Store } from '../contenido/products/interface/store.interface';
import { DataService } from '../contenido/products/services/data.service';
import { ProductsService } from '../contenido/products/services/products.service';
import { shoppingCartService } from '../contenido/products/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  model ={
    name:'',
    store:'',
    shippingAddress:'',
    city:''
  };

  cart: Product[]=[];
  isDelivery = false;
  orderN: Order;

  stores: Store[];

  constructor(
    private dataSvc:DataService,
    private shoppingCartSvc:shoppingCartService,
    private router: Router,
    private productSvc:ProductsService
    ) { }

  ngOnInit(): void {
    this.dataSvc.getStores().subscribe((stores)=>{
      this.stores=stores;
    });
    this.getDataCart();
    this.prepareDetails();
  }

  onPickupOrDelivery(value:boolean):void{
    //console.log(value);
    this.isDelivery=value;
  }

  onSubmit({value:formData}:NgForm):void{
    this.orderN ={
      name: formData.name,
      date: this.getCurrentDay(),
      shippingAddress: formData.shippingAddress,
      city: formData.city,
      pickup: this.isDelivery
    }
    //console.log("Order:::: " + JSON.stringify(this.orderN));
    this.dataSvc.postOrder(this.orderN).pipe(
      tap(res=> console.log("Order => ",res)),
      switchMap((order)=>{
        const orderId=order.id;
        const details=this.prepareDetails();
        return this.dataSvc.postDetails({details,orderId});
      }),tap(res=> console.log("Finish => ",res)),
    ).subscribe;
    console.log("Guardar compra");
    this.router.navigate(['/','gracias']);
    this.shoppingCartSvc.resetCart();
  }

  private getCurrentDay():string{
    return new Date().toLocaleDateString();
  }

  private prepareDetails():Details[]{
    const details:Details[]=[];
    this.cart.forEach((product:Product)=>{
      //console.log(res);
      const {id,id:orderId,name:productName,qty:quantity,stock}=product;
      const updateStock=(stock-quantity);
      this.productSvc.UpdateStock(product.id,updateStock).pipe().subscribe();
      details.push({id,orderId,productName,quantity});
    });
    console.log("Details: ",details)
    return details;
  }

  private getDataCart():void{
    this.shoppingCartSvc.cartActions$.pipe(
      tap((products:Product[])=>this.cart=products)
    ).subscribe();
  }

}
