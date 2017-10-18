package com.example.springngdemoapp.web;

import com.example.springngdemoapp.domain.Book;
import com.example.springngdemoapp.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books")
    public Page<Book> getAllBooks(@SortDefault(sort = "dateTimeAdded") Pageable pageable) {
        return bookService.getAllBooks(pageable);
    }
}
