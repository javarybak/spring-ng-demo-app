package com.example.springngdemoapp.service;

import com.example.springngdemoapp.domain.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BookService {
    Page<Book> getAllBooks(Pageable pageable);

    void addBook(Book book);

    void editBook(Book book);

    void deleteBook(long bookId);
}
