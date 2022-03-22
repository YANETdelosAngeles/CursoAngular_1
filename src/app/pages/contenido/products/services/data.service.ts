import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import { Details, DetailsOrder, Order } from '../interface/order.interface';
import { Store } from '../interface/store.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURLS:string = 'http://localhost:3000/stores';
  private apiURLO:string = 'http://localhost:3000/orders';
  private apiURLD:string = 'http://localhost:3000/detailsOrders';
  constructor(private http: HttpClient) { }

  getStores():Observable<Store[]>{
    return this.http.get<Store[]>(this.apiURLS).pipe(
      map((res: Store[])=>
      {
        return res;
      })
    );
  }

  postOrder(order:Order):Observable<Order>{
    console.log("Order:::: " + JSON.stringify(order));
    return this.http.post<Order>(this.apiURLO,order);
  }

  postDetails(details:DetailsOrder):Observable<DetailsOrder>{
    console.log("Details::: "+ JSON.stringify(details))
    return this.http.post<DetailsOrder>(this.apiURLD,details);
  }

}
