import {Component, OnInit} from '@angular/core';
import {AddEditBookFormComponent} from '../add-new-book-form/add-new-book-form.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Book} from "../book.model";
import {BookService} from "../book.service";

@Component({
  selector: 'app-books-search-bar',
  templateUrl: './books-search-bar.component.html',
  styleUrls: ['./books-search-bar.component.css']
})
export class BooksSearchBarComponent implements OnInit {
  constructor(private modalService: NgbModal, private bookService: BookService) {
  }

  ngOnInit() {
  }

  showAddBookDialog() {
    const modalInstance = this.modalService.open(AddEditBookFormComponent);
    modalInstance.componentInstance.book = new Book();

    const bookSaved = (book) => this.bookService.addBook(book)
      .subscribe(() => modalInstance.close());

    modalInstance.componentInstance.bookSaved.subscribe(bookSaved);
  }
}
