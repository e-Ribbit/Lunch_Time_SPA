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
    console.log(placeOrder);
    return this.http.post('http://localhost:3000/place-order', placeOrder);
  }

  deleteOrder( id : any) {
    console.log(id);
    return this.http.delete('http://localhost:3000/${id}');
  }
}
