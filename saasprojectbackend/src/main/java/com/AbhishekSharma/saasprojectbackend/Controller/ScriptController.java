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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
