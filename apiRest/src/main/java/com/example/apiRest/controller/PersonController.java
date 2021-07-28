package com.example.apiRest.controller;

import com.example.apiRest.dto.PersonDTO;
import com.example.apiRest.entity.Person;
import com.example.apiRest.repository.PersonRepository;
import com.example.apiRest.service.PersonService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api")
@AllArgsConstructor
public class PersonController {

    private PersonService personService;

    @GetMapping(path = "/persons")
    public ResponseEntity<List<Person>> listaPessoas(){
        return ResponseEntity.ok(personService.listaPessoas());
    }

    @GetMapping(path = "/person/{personId}")
    public ResponseEntity buscaPessoaPeloId(@PathVariable Long personId){
        return ResponseEntity.ok(personService.buscaPessoaPeloId(personId));
    }

    @PostMapping(path = "/create-person")
    public ResponseEntity criaPessoa(@RequestBody PersonDTO personDTO){
        personService.criaPessoa(personDTO);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(path = "alter-person/{personId}")
    public ResponseEntity alteraPessoa(@PathVariable Long personId, @RequestBody PersonDTO personDTO){
        return ResponseEntity.ok(personService.alteraPessoa(personId, personDTO));
    }

    @DeleteMapping(path = "/person/{personId}")
    public ResponseEntity deletaPessoa(@PathVariable Long personId){
        personService.deletaPessoa(personId);
        return ResponseEntity.noContent().build();
    }
}
