package com.AbhishekSharma.saasprojectbackend.Service.ScriptService;
import com.AbhishekSharma.saasprojectbackend.Payload.ScriptRequestDTO;
import com.AbhishekSharma.saasprojectbackend.Payload.ScriptResponseDTO;

import java.util.List;
import java.util.UUID;

public interface ScriptService {
    ScriptStructure generateScript(ScriptRequestDTO scriptRequestDTO);
    List<ScriptResponseDTO> getUserScripts();
    ScriptResponseDTO getUserScriptsById(UUID scriptId);
}
