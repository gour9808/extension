import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }


  getBooks() {
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }

}
