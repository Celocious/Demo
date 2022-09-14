import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PracService {
  
 URL = "https://jsonplaceholder.typicode.com/users";
URL1 = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http: HttpClient) { }

  getData(){
    return `This content is comes from Services`
  }

  getContent(){
    return this.http.get(this.URL)
  }
}

