import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  public getPersons(): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/persons`)
  }

  public getPersonsId(id: number): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/person/${id}`)
  }

  public postPerson(formulario: FormGroup): Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/create-person`, JSON.stringify(formulario.value), this.httpOptions)
  }

  public putPerson(id: number, formulario: FormGroup): Observable<any>{
    return this.httpClient.put(`${this.apiUrl}/update-person/${id}`, JSON.stringify(formulario.value), this.httpOptions)
  }

  public deletePerson(id: number): Observable<any>{
    return this.httpClient.delete(`${this.apiUrl}/person/${id}`)
  }
}
