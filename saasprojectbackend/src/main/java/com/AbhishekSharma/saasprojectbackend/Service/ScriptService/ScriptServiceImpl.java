package com.AbhishekSharma.saasprojectbackend.Service.ScriptService;

import com.AbhishekSharma.saasprojectbackend.Entity.User;
import com.AbhishekSharma.saasprojectbackend.Payload.ScriptRequestDTO;
import com.AbhishekSharma.saasprojectbackend.Payload.ScriptResponseDTO;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class ScriptServiceImpl implements ScriptService{

    private final ChatClient gemini;

    public ScriptServiceImpl(ChatClient.Builder builder){
        this.gemini = builder.build();
    }

    @Override
    public String generateScript(ScriptRequestDTO scriptRequestDTO) {
        String systemMessage = buildSystemMessage();
        String userPrompt = buildUserPrompt(scriptRequestDTO);

        return gemini.prompt().
                user(u->{
                    u.text(userPrompt);
                    u.param("title", scriptRequestDTO.getTitle());
                    u.param("duration", scriptRequestDTO.getDurationSeconds());
                    u.param("genre", scriptRequestDTO.getVideoGenre());
                    u.param("tone", scriptRequestDTO.getScriptTone());
                    u.param("writingStyle", scriptRequestDTO.getWritingStyle());
                    u.param("targetAudience", scriptRequestDTO.getTargetAudience());
                    u.param("channelNiche", scriptRequestDTO.getChannelNiche());
                    u.param("hookStyle", scriptRequestDTO.getHookStyle());
                    u.param("pacingStyle", scriptRequestDTO.getPacingStyle());
                    u.param("ctaType", scriptRequestDTO.getCtaType());
                    u.param("depthLevel", scriptRequestDTO.getDepthLevel());
                    u.param("voiceStyle", scriptRequestDTO.getVoiceStyle());
                    u.param("storytellingPreference", scriptRequestDTO.getStorytellingPreference());
                    u.param("emotionLevel", scriptRequestDTO.getEmotionLevel());
                    u.param("language", scriptRequestDTO.getLanguage());
                })
                .system(systemMessage)
                .call()
                .content();

    }


    private String buildSystemMessage(){
        return "You are an elite YouTube scriptwriter specializing in faceless, high-retention videos.\n" +
                "\n" +
                "Your job is to generate:\n" +
                "• High-watchtime YouTube scripts\n" +
                "• Structured narration for voiceover\n" +
                "• Emotionally compelling storytelling\n" +
                "• Pacing and flow that matches the video duration\n" +
                "• Hooks that immediately capture attention\n" +
                "• Closings that convert (CTA-aware)\n" +
                "\n" +
                "Rules you MUST follow:\n" +
                "1. Always respect the user-provided parameters (tone, style, pacing, duration, etc.).\n" +
                "2. Never mention the system or user prompts in your output.\n" +
                "3. Output only the final YouTube script (no explanations).\n" +
                "4. If research, statistics, or quotes are enabled, include them naturally without forcing.\n" +
                "5. Write in short, punchy, voiceover-friendly lines to maintain retention.\n" +
                "6. Maintain a faceless YouTube style — narration only (no on-camera dialogue).\n" +
                "7. Match the length to the user’s desired duration + pacing.\n" +
                "8. Avoid all topics listed in the user's “avoidTopics”.\n" +
                "9. Always tailor your writing to the channel niche and target audience.\n" +
                "\n" +
                "Your output must always be:\n" +
                "- Polished\n" +
                "- Cohesive\n" +
                "- Engaging\n" +
                "- Realistic\n" +
                "- Retention-optimized";
    }

    private String buildUserPrompt(ScriptRequestDTO scriptRequestDTO){
        return "Generate a complete YouTube script using the details below.\n" +
                "\n" +
                "[USER INPUTS]\n" +
                "Title/Topic: {title}\n" +
                "Duration: {duration} seconds\n" +
                "Genre: {genre}\n" +
                "Tone: {tone}\n" +
                "Writing Style: {writingStyle}\n" +
                "Target Audience: {targetAudience}\n" +
                "Channel Niche: {channelNiche}\n" +
                "Hook Style: {hookStyle}\n" +
                "Pacing Style: {pacingStyle}\n" +
                "Call-To-Action Type: {ctaType}\n" +
                "Depth Level: {depthLevel}\n" +
                "Voice Style: {voiceStyle}\n" +
                "Storytelling Preference: {storytellingPreference}\n" +
                "Emotion Level: {emotionLevel}\n" +
                "Language: {language}\n" +
                "\n" +
                "[OUTPUT FORMAT]\n" +
                "1. Suggested Video Title (optional)\n" +
                "2. Full YouTube Script\n" +
                "3. Final CTA matching the selected ctaType\n" +
                "\n" +
                "Do NOT include any explanations. Only output the script.";
    }
}
