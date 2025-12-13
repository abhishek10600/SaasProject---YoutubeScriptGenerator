package com.AbhishekSharma.saasprojectbackend.Service.UserService;

import com.AbhishekSharma.saasprojectbackend.Entity.User;
import com.AbhishekSharma.saasprojectbackend.Payload.UserResponse;
import com.AbhishekSharma.saasprojectbackend.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Override
    public UserResponse getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email).orElseThrow(()-> new RuntimeException("User not found"));

        return UserResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .role(user.getRole())
                .userPlan(user.getUserPlan())
                .monthlyScriptCount(user.getMonthlyScriptCount())
                .active(user.isActive())
                .createdAt(user.getCreatedAt())
                .build();
    }
}
