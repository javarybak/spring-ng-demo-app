package com.example.springngdemoapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.example.springngdemoapp.config",
        "com.example.springngdemoapp.repository",
        "com.example.springngdemoapp.service",
        "com.example.springngdemoapp.web",})
@EntityScan(basePackages = {"com.example.springngdemoapp.domain",
        "org.springframework.data.jpa.convert.threeten"})
public class SpringNgDemoAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringNgDemoAppApplication.class, args);
    }
}
