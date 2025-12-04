package com.AbhishekSharma.saasprojectbackend.Payload;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ScriptRequestDTO {

    @NotBlank
    private String title;

    @NotNull
    private Integer durationSeconds;

    @NotBlank
    private String videoGenre;

    @NotBlank
    private String scriptTone;

    @NotBlank
    private String writingStyle;

    @NotBlank
    private String targetAudience;

    @NotBlank
    private String channelNiche;

    @NotBlank
    private String hookStyle;

    @NotBlank
    private String pacingStyle;

    @NotBlank
    private String ctaType;

    @NotBlank
    private String depthLevel;

    @NotBlank
    private String voiceStyle;

    @NotBlank
    private String storytellingPreference;

    @NotBlank
    private String emotionLevel;

    @NotBlank
    private String language;
}
