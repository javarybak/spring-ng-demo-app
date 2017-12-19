import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {BooksComponent} from './book/books/books.component';
import {BookService} from './book/book.service';
import {AboutComponent} from './about/about.component';
import {BookItemComponent} from './book/book-item/book-item.component';
import {BooksSearchBarComponent} from './book/books-search-bar/books-search-bar.component';
import {AddEditBookFormComponent} from './book/add-edit-book-form/add-new-book-form.component';

const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookItemComponent,
    AboutComponent,
    BooksSearchBarComponent,
    AddEditBookFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  entryComponents: [AddEditBookFormComponent]
})
export class AppModule {
}
