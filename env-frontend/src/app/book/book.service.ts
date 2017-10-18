import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class BookService {

  constructor(private http: Http) {
  }

  getAll() {
    return this.http.get("http://localhost:8080/api/v1/books")
      .map((response: Response) => response.json());
  }
}
