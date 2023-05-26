import { Component } from '@angular/core';
import { ListEntry } from '../entities/list-entry';

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.scss']
})
export class ListEntryComponent {
  listEntry: ListEntry = {
    id: 1,
    name: "Tonis Sammelbestellung",
    restaurant: "Pizzeria Bella Italia",
    paypal: "paypal.me",
    description: "Lorem Ipsum",
  };
}
