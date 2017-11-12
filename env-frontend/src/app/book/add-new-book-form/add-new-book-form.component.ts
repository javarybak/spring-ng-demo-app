import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Book} from '../book.model';

@Component({
  selector: 'app-add-edit-book-form',
  templateUrl: './add-edit-book-form.component.html',
  styleUrls: ['./add-edit-book-form.component.css']
})
export class AddEditBookFormComponent implements OnInit {
  @Input()
  book: Book;
  @Output()
  bookSaved: EventEmitter<Book>;

  constructor(public activeModal: NgbActiveModal) {
    this.bookSaved = new EventEmitter<Book>();
  }

  ngOnInit() {

  }

  save() {
    this.bookSaved.emit(this.book);
  }
}
