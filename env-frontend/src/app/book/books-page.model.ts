import {Book} from "./book.model";

export class BooksPage {
  constructor(public content: Array<Book>,
              public totalElements: number,
              public size: number) {
  }
}
