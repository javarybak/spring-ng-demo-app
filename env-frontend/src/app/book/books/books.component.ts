import {Component, EventEmitter, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {BooksPage} from "../books-page.model";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public booksPage: EventEmitter<BooksPage>;

  constructor(private bookService: BookService) {
    this.booksPage = bookService.booksPage;
  }

  ngOnInit() {
    this.bookService.getAllBooks();
  }

  changePage(page: number) {
    this.bookService.pageNumber = page - 1;
    this.bookService.getAllBooks();
  }
}

