import {Component, EventEmitter, OnInit} from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public booksPage: EventEmitter<any>;

  constructor(private bookService: BookService) {
    this.booksPage = bookService.booksPage;
  }

  ngOnInit() {
    this.bookService.getAllBooks();
  }
}

