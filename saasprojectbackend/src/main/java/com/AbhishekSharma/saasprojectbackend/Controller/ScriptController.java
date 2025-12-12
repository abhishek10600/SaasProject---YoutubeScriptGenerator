package com.AbhishekSharma.saasprojectbackend.Controller;

import com.AbhishekSharma.saasprojectbackend.Entity.User;
import com.AbhishekSharma.saasprojectbackend.Payload.ScriptRequestDTO;
import com.AbhishekSharma.saasprojectbackend.Payload.ScriptResponseDTO;
import com.AbhishekSharma.saasprojectbackend.Repository.UserRepository;
import com.AbhishekSharma.saasprojectbackend.Service.ScriptService.Itinerary;
import com.AbhishekSharma.saasprojectbackend.Service.ScriptService.ScriptService;
import com.AbhishekSharma.saasprojectbackend.Service.ScriptService.ScriptStructure;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/scripts")
@RequiredArgsConstructor
public class ScriptController {

    private final UserRepository userRepository;
    private final ScriptService scriptService;

    @PostMapping("/generate")
    public ResponseEntity<ScriptStructure> generateScript(@Valid @RequestBody ScriptRequestDTO scriptRequestDTO){

        ScriptStructure response = scriptService.generateScript(scriptRequestDTO);
        return new ResponseEntity<>(response, HttpStatus.CREATED);

    }

    @GetMapping
    public ResponseEntity<List<ScriptResponseDTO>> getUserScripts(){
        List<ScriptResponseDTO> scriptsDTOs = scriptService.getUserScripts();
        return new ResponseEntity<>(scriptsDTOs, HttpStatus.OK);
    }

    @GetMapping("/{scriptId}")
    public ResponseEntity<ScriptResponseDTO> getUserScriptById(@PathVariable UUID scriptId){
        ScriptResponseDTO scriptDTO = scriptService.getUserScriptsById(scriptId);
        return new ResponseEntity<>(scriptDTO, HttpStatus.OK);
    }
}
