import { Component, OnInit } from '@angular/core';
import { PlaceOrderService } from '../services/place-order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor (private orderListItem: PlaceOrderService) { }
  orderListItems: any = [];
  ngOnInit(): void {
    this.orderListItem.getPlaceOrder().subscribe((pOData) => {
      console.log(pOData);
      this.orderListItems = pOData;
    });
  }

  deleteEntry( entry_id : any) {
    console.log(entry_id);
    this.orderListItem.deleteOrder(entry_id).subscribe((result)=>{
      console.log(result);
    });
  }
}
