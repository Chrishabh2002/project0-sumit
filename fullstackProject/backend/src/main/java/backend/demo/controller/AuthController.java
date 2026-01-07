package backend.demo.controller;

import backend.demo.dto.LoginRequest;
import backend.demo.dto.RegisterRequest;
import backend.demo.model.User;
import backend.demo.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // React frontend
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) throws Exception {
        return authService.register(request.getName(), request.getEmail(), request.getPassword());
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginRequest request) throws Exception {
        return authService.login(request.getEmail(), request.getPassword());
    }
}
