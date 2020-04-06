import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }

  public doRegistration(book){
    return this.http.post("http://localhost:8080/books/inserts",book,{responseType:'text' as 'json'});
  }
  public getBooks(){
    return this.http.get("http://localhost:8080/books/showBooks");
  }
}
