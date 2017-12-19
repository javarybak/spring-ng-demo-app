import {Component} from '@angular/core';
import {AddEditBookFormComponent} from '../add-edit-book-form/add-new-book-form.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Book} from "../book.model";
import {BookService} from "../book.service";

@Component({
  selector: 'app-books-search-bar',
  templateUrl: './books-search-bar.component.html',
  styleUrls: ['./books-search-bar.component.css']
})
export class BooksSearchBarComponent {
  constructor(private modalService: NgbModal, private bookService: BookService) {
  }

  showAddBookDialog() {
    const modalInstance = this.modalService.open(AddEditBookFormComponent);
    let componentInstance = modalInstance.componentInstance;
    componentInstance.book = new Book();

    const bookSavedFunction = (book) => this.bookService.addBook(book)
      .subscribe(() => modalInstance.close(),
        (errors) => componentInstance.errors.next(errors));

    componentInstance.bookSaved.subscribe(bookSavedFunction);
  }
}
