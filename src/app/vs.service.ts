import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VsService {

  url = "https://jsonplaceholder.typicode.com/users";
  todosURL = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http:HttpClient) { }

  getData(){
    return "This is Service"
  }
  getName(){
    return "This is Service for getting User Names"
  }
  getUser(){
    return this.http.get(this.url);
  }
}
