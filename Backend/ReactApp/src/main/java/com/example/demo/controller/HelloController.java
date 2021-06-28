package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hello")
public class HelloController {

    @GetMapping
    @ResponseBody
    public User index() {
        return User.of("Taro", "taro.yamada@example.com");
    }

    @PostMapping
    public User post(@RequestBody User user) {
        return user;
    }

}

@Data
@NoArgsConstructor
@AllArgsConstructor(staticName = "of")
class User {
    String name;
    String email;
}