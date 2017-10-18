import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';

import {DialogModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {BooksComponent} from './book/books/books.component';
import {BookService} from './book/book.service';
import {AboutComponent} from './about/about.component';
import {BookItemComponent} from './book/book-item/book-item.component';
import {BooksSearchBarComponent} from './book/books-search-bar/books-search-bar.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
