package com.example.apiRest.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Column;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonDTO {
    @NonNull
    private String nome;

    @NonNull
    private String rg;

    @NonNull
    private LocalDate dataNascimento;
}
