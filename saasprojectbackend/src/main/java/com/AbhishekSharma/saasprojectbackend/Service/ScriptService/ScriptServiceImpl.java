package com.AbhishekSharma.saasprojectbackend.Service.ScriptService;

import com.AbhishekSharma.saasprojectbackend.Entity.Script;
import com.AbhishekSharma.saasprojectbackend.Entity.User;
import com.AbhishekSharma.saasprojectbackend.Payload.ScriptRequestDTO;
import com.AbhishekSharma.saasprojectbackend.Repository.ScriptRepository;
import com.AbhishekSharma.saasprojectbackend.Repository.UserRepository;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class ScriptServiceImpl implements ScriptService{

    private final UserRepository userRepository;
    private final ScriptRepository scriptRepository;
    private final ChatClient gemini;

    public ScriptServiceImpl(ChatClient.Builder builder, UserRepository userRepository, ScriptRepository scriptRepository){
        this.gemini = builder.build();
        this.userRepository = userRepository;
        this.scriptRepository = scriptRepository;
    }

    @Override
    public ScriptStructure generateScript(ScriptRequestDTO scriptRequestDTO) {
        String systemMessage = buildSystemMessage();
        String userPrompt = buildUserPrompt(scriptRequestDTO);

        ScriptStructure generatedScript =  gemini.prompt().
                user(u->{
                    u.text(userPrompt);
                })
                .system(systemMessage)
                .call()
                .entity(ScriptStructure.class);

        if (generatedScript == null || generatedScript.script() == null || generatedScript.script().isBlank()) {
            throw new RuntimeException("AI returned empty or invalid script");
        }

        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email).orElseThrow(()-> new RuntimeException("User not found"));

        Script script = Script.builder()
                .user(user)
                .title(scriptRequestDTO.getTitle())
                .durationSeconds(scriptRequestDTO.getDurationSeconds())
                .videoGenre(scriptRequestDTO.getVideoGenre())
                .scriptTone(scriptRequestDTO.getScriptTone())
                .writingStyle(scriptRequestDTO.getWritingStyle())
                .targetAudience(scriptRequestDTO.getTargetAudience())
                .channelNiche(scriptRequestDTO.getChannelNiche())
                .hookStyle(scriptRequestDTO.getHookStyle())
                .pacingStyle(scriptRequestDTO.getPacingStyle())
                .ctaType(scriptRequestDTO.getCtaType())
                .depthLevel(scriptRequestDTO.getDepthLevel())
                .voiceStyle(scriptRequestDTO.getVoiceStyle())
                .storytellingPreference(scriptRequestDTO.getStorytellingPreference())
                .emotionLevel(scriptRequestDTO.getEmotionLevel())
                .language(scriptRequestDTO.getLanguage())
                .generatedScript(generatedScript.script())
                .build();

        scriptRepository.save(script);

        return generatedScript;

    }


    private String buildSystemMessage(){
        return """
                You are an elite YouTube scriptwriter specializing in faceless, high-retention videos.
                
                Your job is to generate:
                • High-watchtime YouTube scripts
                • Structured narration for voiceover
                • Emotionally compelling storytelling
                • Pacing and flow that matches the video duration
                • Hooks that immediately capture attention
                • Closings that convert (CTA-aware)
                
                Rules you MUST follow:
                1. Always respect the user-provided parameters (tone, style, pacing, duration, etc.).
                2. Never mention the system or user prompts in your output.
                3. Output only the final YouTube script (no explanations).
                4. If research, statistics, or quotes are enabled, include them naturally without forcing.
                5. Write in short, punchy, voiceover-friendly lines to maintain retention.
                6. Maintain a faceless YouTube style — narration only (no on-camera dialogue).
                7. Match the length to the user’s desired duration + pacing.
                8. Avoid all topics listed in the user's “avoidTopics”.
                9. Always tailor your writing to the channel niche and target audience.
                
                Your output must always be:
                - Polished
                - Cohesive
                - Engaging
                - Realistic
                - Retention-optimized
                """;
    }

    private String buildUserPrompt(ScriptRequestDTO scriptRequestDTO){
        return String.format("""
        Generate a complete YouTube script using the details below.
        Title/Topic: %s
        Duration: %d seconds
        Genre: %s
        Tone: %s
        Writing Style: %s
        Target Audience: %s
        Channel Niche: %s
        Hook Style: %s
        Pacing Style: %s
        Call-To-Action Type: %s
        Depth Level: %s
        Voice Style: %s
        Storytelling Preference: %s
        Emotion Level: %s
        Language: %s
        [OUTPUT FORMAT]
        1. Full YouTube Script
        """,
                scriptRequestDTO.getTitle(),
                scriptRequestDTO.getDurationSeconds(),
                scriptRequestDTO.getVideoGenre(),
                scriptRequestDTO.getScriptTone(),
                scriptRequestDTO.getWritingStyle(),
                scriptRequestDTO.getTargetAudience(),
                scriptRequestDTO.getChannelNiche(),
                scriptRequestDTO.getHookStyle(),
                scriptRequestDTO.getPacingStyle(),
                scriptRequestDTO.getCtaType(),
                scriptRequestDTO.getDepthLevel(),
                scriptRequestDTO.getVoiceStyle(),
                scriptRequestDTO.getStorytellingPreference(),
                scriptRequestDTO.getEmotionLevel(),
                scriptRequestDTO.getLanguage()
        );
    }
}
