package com.example.springngdemoapp.web;

import com.example.springngdemoapp.domain.Book;
import com.example.springngdemoapp.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public Page<Book> getAllBooks(@PageableDefault(size = 5, sort = "dateTimeAdded", direction = Sort.Direction.DESC)
                                              Pageable pageable) {
        return bookService.getAllBooks(pageable);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void addBook(@RequestBody @Valid Book book) {
        bookService.addBook(book);
    }

    @PutMapping("/{bookId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editBook(@PathVariable long bookId, @RequestBody @Valid Book book) {
        book.setId(bookId);
        bookService.editBook(book);
    }

    @DeleteMapping(value = "/{bookId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBook(@PathVariable long bookId) {
        bookService.deleteBook(bookId);
    }
}
