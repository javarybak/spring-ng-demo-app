import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Book} from '../book.model';
import {ErrorModel} from "../../error/error-model";

@Component({
  selector: 'app-add-edit-book-form',
  templateUrl: './add-edit-book-form.component.html',
  styleUrls: ['./add-edit-book-form.component.css']
})
export class AddEditBookFormComponent {
  @Input()
  book: Book;
  @Input()
  errors: EventEmitter<Map<string, ErrorModel>>;
  @Output()
  bookSaved: EventEmitter<Book>;

  constructor(public activeModal: NgbActiveModal) {
    this.bookSaved = new EventEmitter<Book>();
    this.errors = new EventEmitter<Map<string, ErrorModel>>();
  }

  save() {
    this.bookSaved.emit(this.book);
  }
}
