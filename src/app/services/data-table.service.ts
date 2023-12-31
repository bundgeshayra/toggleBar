import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(private http: HttpClient) { }

  users() : any{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
