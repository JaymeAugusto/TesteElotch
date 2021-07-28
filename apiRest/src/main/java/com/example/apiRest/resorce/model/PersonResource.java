package com.example.apiRest.resorce.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonResource {

    @JsonProperty("nome")
    private String nome;

    @JsonProperty("rg")
    private String rg;

    @JsonProperty("data_nascimento")
    private String dataNascimento;

    @Override
    public String toString() {
        return "PersonResource{" +
                "nome='" + nome + '\'' +
                ", rg='" + rg + '\'' +
                ", dataNascimento='" + dataNascimento + '\'' +
                '}';
    }
}
