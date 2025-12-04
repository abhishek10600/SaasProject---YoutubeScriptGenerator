package com.AbhishekSharma.saasprojectbackend.Service.ScriptService;

import com.AbhishekSharma.saasprojectbackend.Entity.User;
import com.AbhishekSharma.saasprojectbackend.Payload.ScriptRequestDTO;
import com.AbhishekSharma.saasprojectbackend.Payload.ScriptResponseDTO;

public interface ScriptService {
    String generateScript(ScriptRequestDTO scriptRequestDTO);
}
