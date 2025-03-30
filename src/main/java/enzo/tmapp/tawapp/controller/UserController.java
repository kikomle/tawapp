package enzo.tmapp.tawapp.controller;


import enzo.tmapp.tawapp.model.User;
import enzo.tmapp.tawapp.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    //register a new user
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if(userRepository.findByUsername(user.getUsername()).isPresent()) {
            return "Username already exists";
        }
        userRepository.save(user);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        Optional<User> optionalUser = userRepository.findByUsername(user.getUsername());
        if(optionalUser.isPresent() && optionalUser.get().getPassword().equals(user.getPassword())) {
            return "Logged in successfully";
        }
        return "Invalid credentials";
    }
}
