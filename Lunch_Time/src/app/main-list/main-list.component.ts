import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {

  constructor(private mainListItem:FormDataService) { }
  listItems: any = [];
  ngOnInit(): void {
    this.mainListItem.getFormData().subscribe((allData)=> {
      console.log(allData);
      this.listItems = allData;
    });
  }
  deleteEntry( entry_id : any) {
    console.log(entry_id);
  }
}
