import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-books-search-bar',
  templateUrl: './books-search-bar.component.html',
  styleUrls: ['./books-search-bar.component.css']
})
export class BooksSearchBarComponent implements OnInit {
  displayAddBookDialog: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  showAddBookDialog() {
    this.displayAddBookDialog = true;
  }
}
