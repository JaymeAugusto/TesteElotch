package com.example.apiRest.service;

import com.example.apiRest.dto.PersonDTO;
import com.example.apiRest.entity.Person;
import com.example.apiRest.repository.PersonRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@AllArgsConstructor
public class PersonService {

    private PersonRepository personRepository;

    public List<Person> listaPessoas(){
        List<Person> personRepositoryAll = personRepository.findAll();

        return personRepositoryAll;
    }

    public Person buscaPessoaPeloId(Long id){
        Person personRepositoryById = personRepository.findById(id)
                .orElseThrow(()-> {throw new EntityNotFoundException("Nenhum Registro com esse ID");});
        return personRepositoryById;
    }

    public void criaPessoa(PersonDTO personDTO){
        Person personToSave = Person.builder()
                .nome(personDTO.getNome())
                .rg(personDTO.getRg())
                .dataNascimento(personDTO.getDataNascimento())
                .build();

        personRepository.save(personToSave);
    }

    public Person alteraPessoa( Long id, PersonDTO personDTO){
        Person personFounded = this.buscaPessoaPeloId(id);
        personFounded.setNome(personDTO.getNome());
        personFounded.setRg(personDTO.getRg());
        personFounded.setDataNascimento(personDTO.getDataNascimento());

        return personRepository.save(personFounded);
    }

    public void deletaPessoa(Long id){
        personRepository.deleteById(id);
    }

}
