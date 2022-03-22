import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL:string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL).pipe(
      map((res: Product[])=>
      {
        return res;
      })
    );
  }

  UpdateStock(productId:number,stock:number):Observable<any>{
    const body={"stock": stock};
    console.log("Stock actualizado ",body," id ",productId," ruta: ",this.apiURL+'/'+productId);
    return this.http.patch(this.apiURL+'/'+productId,body);
  }

}
