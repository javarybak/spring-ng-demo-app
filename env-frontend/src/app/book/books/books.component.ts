import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = this.bookService.getAll();

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

}
