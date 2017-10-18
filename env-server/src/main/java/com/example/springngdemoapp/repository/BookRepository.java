package com.example.springngdemoapp.repository;

import com.example.springngdemoapp.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
