import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  // TODO: check why this.url doesn't work properly
  // url='http://localhost:3000/form-data';
  constructor( private http: HttpClient ) { }
    getFormData(){
      return this.http.get('http://localhost:3000/form-data');
    }
}