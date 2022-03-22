import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class shoppingCartService {
  products: Product[] = [];
  private cartSuject = new BehaviorSubject<Product[]>([]);
  private totalSuject = new BehaviorSubject<number>(0);
  private quatitySuject = new BehaviorSubject<number>(0);
  constructor() { }

  get totalActions$():Observable<number>{
    return this.totalSuject.asObservable();
  }

  get quatityActions$():Observable<number>{
    return this.quatitySuject.asObservable();
  }

  get cartActions$():Observable<Product[]>{
    return this.cartSuject.asObservable();
  }

  resetCart():void{
    this.cartSuject.next([]);
    this.totalSuject.next(0);
    this.quatitySuject.next(0);
    this.products=[];
  }

  //método para calcular el total a pagar
  private calcTotal():void{
    const total = this.products.reduce((acc,prod)=>acc+=(prod.price*prod.qty),0);
    this.totalSuject.next(total);
  }

  //método para calcular el total de productos añadidos al carrito
  private quantityProducts():void{
    const quantity = this.products.reduce((acc,prod)=>acc+=prod.qty,0);
    this.quatitySuject.next(quantity);
  }

  //método para añadir un producto al carrito
  private addToCart(product:Product):void{
    const isProductInCart = this.products.find(({id}) => id == product.id)//si es el mismo productos
    if(isProductInCart){
      isProductInCart.qty+=1;
    }else{
      this.products.push({...product,qty:1});
    }
    //this.products.push(product);
    this.cartSuject.next(this.products);
  }

  //metodo para acceder a los metodos privados
  updateCart(product:Product):void{
    this.addToCart(product);
    this.quantityProducts();
    this.calcTotal();
  }

}
