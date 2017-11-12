import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public booksPage: Observable<any>;

  constructor(private bookService: BookService) {
    this.booksPage = bookService.booksPage;
  }

  ngOnInit() {
    this.bookService.getAllBooks();
  }


}

