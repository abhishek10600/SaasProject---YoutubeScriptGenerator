package com.AbhishekSharma.saasprojectbackend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.UUID;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "scripts")
public class Script {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Integer durationSeconds;

    @Column(nullable = false)
    private String videoGenre;

    @Column(nullable = false)
    private String scriptTone;

    @Column(nullable = false)
    private String writingStyle;

    @Column(nullable = false)
    private String targetAudience;

    @Column(nullable = false)
    private String channelNiche;

    @Column(nullable = false)
    private String hookStyle;

    @Column(nullable = false)
    private String pacingStyle;

    @Column(nullable = false)
    private String ctaType;

    @Column(nullable = false)
    private String depthLevel;

    @Column(nullable = false)
    private String voiceStyle;

    @Column(nullable = false)
    private String storytellingPreference;

    @Column(nullable = false)
    private String emotionLevel;

    @Column(nullable = false)
    private String language;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String generatedScript;

    @CreationTimestamp
    @Column(updatable = false)
    private Instant createdAt;
}
