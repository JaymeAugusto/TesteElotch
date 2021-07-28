import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PersonService {

  apiUrl = "http://localhost:8080/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  // public getPersons(): Observable<Person[]>{
  //   return this.httpClient.get<Person>(`${this.apiUrl}/persons`).pipe(map(res => res)).subscribe(dados => {
  //     console.log(dados); 
  //   }
  // }

  public getPersons(): Observable<any>{
    return this.httpClient.get(this.apiUrl + "/persons")
      
  }

  // public postPerson(){
  //   this.httpClient.post(
  //     this.apiUrl + "/create-person",JSON.stringify({
  //       "nome": "Rafao",
  //       "rg": "1324567-8",
  //       "dataNascimento": "1995-07-21"}))
  //     .pipe(map(res => res))
  //     .subscribe(dados => {
  //       console.log(dados);
        
  //       // reseta o Form
  //       // this.resetar();
  //     },
  //     (error: any) => alert('Erro ao enviar Formulário'));
  // }
}
