package com.example.springngdemoapp.web;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * @author Igor Rybak
 * @since 23-11-2017
 */
@RestControllerAdvice
public class ExceptionHandlerController {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ResponseBody
    public Map<String, ErrorDto> handleException(MethodArgumentNotValidException e) {
        return e.getBindingResult().getFieldErrors().stream()
                .map(fe -> new ErrorDto(fe.getField(), fe.getDefaultMessage()))
                .collect(Collectors.toMap(ErrorDto::getPropertyPath, Function.identity()));
    }
}
