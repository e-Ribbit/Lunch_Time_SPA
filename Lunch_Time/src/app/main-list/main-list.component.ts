import { Component, OnInit } from '@angular/core';
import { ListEntryComponent } from '../list-entry/list-entry.component';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {
//  entries = ListEntryComponent[];
  ngOnInit(): void {
    
  }

}
