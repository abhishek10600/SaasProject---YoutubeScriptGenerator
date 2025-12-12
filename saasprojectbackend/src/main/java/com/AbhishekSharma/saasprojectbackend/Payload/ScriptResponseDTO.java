package com.AbhishekSharma.saasprojectbackend.Payload;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
@Builder
public class ScriptResponseDTO {

    private UUID id;
    private String title;
    private Integer durationSeconds;
    private String videoGenre;
    private String scriptTone;
    private String writingStyle;
    private String targetAudience;
    private String channelNiche;
    private String hookStyle;
    private String pacingStyle;
    private String ctaType;
    private String depthLevel;
    private String voiceStyle;
    private String storytellingPreference;
    private String emotionLevel;
    private String language;
    private String generatedScript;
    private Instant createdAt;
}
