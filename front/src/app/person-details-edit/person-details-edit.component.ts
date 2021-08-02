import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonService } from './../shared/service/person.service';
import { Person } from './../shared/model/person.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-person-details-edit',
  templateUrl: './person-details-edit.component.html',
  styleUrls: ['./person-details-edit.component.css']
})
export class PersonDetailsEditComponent implements OnInit {

  id!: number;
  inscricao!: Subscription;
  person!: Person;
  formulario!: FormGroup;
  formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService,
    private formbiulder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.getPersonId(this.id);
      }
    );

    this.formulario = this.formbiulder.group({
      nome: [null, [Validators.required]],
      rg: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]]
    })

    timer(800).subscribe( x => this.formulario.setValue({
      nome: this.person.nome,
      rg: this.person.rg,
      dataNascimento: this.person.dataNascimento
      })
    )
  }

  getPersonId(id: number){
    this.personService.getPersonsId(id).subscribe(data => {
      this.person = data;
    });
  }

  onSubmit(){
    if(this.formMudou){
      if (this.formulario.valid) {
        this.putPerson(this.formulario);
        alert('formulário alterado com Sucesso!');
        this.rediresionar();
      }
    } else{
      alert('Nenhuma alteração feita no usuario!');
    }
  }

  onInput(){
    this.formMudou = true;
  }

  putPerson(formulario: FormGroup){
    this.personService.putPerson(this.id, formulario)
    .pipe(map(res => res))
    .subscribe(data => {},
    (error: any) => alert('Erro ao enviar Formulário'));
  }

  rediresionar(){
    timer(800).subscribe( x =>{
      this.router.navigate(['/']);
    });
  }

  return(){
    if(this.formMudou && confirm('Deseja sair sem fazer alterações no Usuario?')){
      this.router.navigate([this.id]);
    }else if(!this.formMudou){
      this.router.navigate([this.id]);
    }
  }

}
