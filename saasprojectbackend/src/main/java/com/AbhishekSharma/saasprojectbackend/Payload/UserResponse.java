package com.AbhishekSharma.saasprojectbackend.Payload;

import com.AbhishekSharma.saasprojectbackend.Entity.UserPlan;
import com.AbhishekSharma.saasprojectbackend.Entity.UserRole;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
@Builder
public class UserResponse {

    private UUID id;
    private String email;
    private UserRole role;
    private UserPlan userPlan;
    private int monthlyScriptCount;
    private boolean active;
    private Instant createdAt;
}
