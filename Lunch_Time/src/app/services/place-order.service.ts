import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlaceOrderService {
  constructor(private http: HttpClient) {}
  getPlaceOrder() {
    return this.http.get('http://localhost:3000/place-order');
  }

  submitPlaceOrder(placeOrder: []) {
    return this.http.post<any>('http://localhost:3000/place-order', placeOrder);
  }

  deleteOrder( id : any) {
    return this.http.delete<any>(`http://localhost:3000/place-order/${id}`);
  }
}
