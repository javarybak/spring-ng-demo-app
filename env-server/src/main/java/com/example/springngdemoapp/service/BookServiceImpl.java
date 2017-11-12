package com.example.springngdemoapp.service;

import com.example.springngdemoapp.domain.Book;
import com.example.springngdemoapp.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class BookServiceImpl implements BookService {
    private final BookRepository bookRepository;

    @Autowired
    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public Page<Book> getAllBooks(Pageable pageable) {
        return bookRepository.findAll(pageable);
    }

    @Override
    public Book addBook(Book book) {
        book.setDateTimeAdded(LocalDateTime.now());
        return bookRepository.save(book);
    }

    @Override
    public void editBook(Book book) {
        bookRepository.save(book);
    }

    @Override
    public void deleteBook(long bookId) {
        bookRepository.delete(bookId);
    }
}
