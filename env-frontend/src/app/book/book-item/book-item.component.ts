import {Component, Input} from '@angular/core';
import {Book} from '../book.model';
import {BookService} from "../book.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddEditBookFormComponent} from "../add-edit-book-form/add-new-book-form.component";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input()
  private book: Book;

  constructor(private bookService: BookService, private modalService: NgbModal) {
  }

  showEditBookDialog() {
    const modalInstance = this.modalService.open(AddEditBookFormComponent);
    let componentInstance = modalInstance.componentInstance;
    componentInstance.book = Object.assign({}, this.book);

    const bookSavedFunction = (book) => this.bookService.editBook(book)
      .subscribe(() => modalInstance.close(),
        (errors) => componentInstance.errors.next(errors));

    componentInstance.bookSaved.subscribe(bookSavedFunction);
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.id);
  }
}
