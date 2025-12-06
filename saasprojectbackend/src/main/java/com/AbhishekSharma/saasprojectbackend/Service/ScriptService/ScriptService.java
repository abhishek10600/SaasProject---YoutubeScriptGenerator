package com.AbhishekSharma.saasprojectbackend.Service.ScriptService;
import com.AbhishekSharma.saasprojectbackend.Payload.ScriptRequestDTO;

public interface ScriptService {
    ScriptStructure generateScript(ScriptRequestDTO scriptRequestDTO);
}
