package com.example.springngdemoapp.web;

/**
 * @author Igor Rybak
 * @since 24-11-2017
 */
public class ErrorDto {
    private final String propertyPath;
    private final String message;

    public ErrorDto(String propertyPath, String message) {

        this.propertyPath = propertyPath;
        this.message = message;
    }

    public String getPropertyPath() {
        return propertyPath;
    }

    public String getMessage() {
        return message;
    }
}
