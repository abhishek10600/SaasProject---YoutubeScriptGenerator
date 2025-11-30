package com.AbhishekSharma.saasprojectbackend.Payload;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class AuthResponse {

    private String token;
    private String message;
}
