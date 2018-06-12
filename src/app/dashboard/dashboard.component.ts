import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  country: any = [];
  loading: boolean;

  constructor(private router: Router, private books: BooksService) {
  }

  ngOnInit() {
    this.getBooks();

  }

  getBooks() {
    this.loading = true;
    this.books.getBooks().subscribe(res => {
      console.log(res);
      this.loading = false;
      this.country = res;

    })
  }
}
