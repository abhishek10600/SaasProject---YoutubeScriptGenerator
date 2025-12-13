package com.AbhishekSharma.saasprojectbackend.Controller;

import com.AbhishekSharma.saasprojectbackend.Payload.UserResponse;
import com.AbhishekSharma.saasprojectbackend.Service.UserService.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<UserResponse> getCurrentUser(){
        UserResponse userData = userService.getCurrentUser();
        return new ResponseEntity<>(userData, HttpStatus.OK);
    }
}
