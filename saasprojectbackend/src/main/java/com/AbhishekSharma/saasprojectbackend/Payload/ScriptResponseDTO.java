package com.AbhishekSharma.saasprojectbackend.Payload;

import lombok.Data;

@Data
public class ScriptResponseDTO {

    private String title;
    private Integer durationSeconds;
    private String generatedScript;
    private String tone;
    private String writingStyle;
    private String audienceType;
    private String emotionalGoal;
    private String pace;
    private String createdAt;


}
