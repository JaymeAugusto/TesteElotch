import { PersonService } from './../shared/service/person.service';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      rg: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]]
    })
  }

  onSubmit(){
  if (this.formulario.valid) {
      this.postPerson(this.formulario);
      alert('formulário enviado com Sucesso!');
      this.resetar();
      this.rediresionar();
    } else {
      console.log('formulario invalido');  
      this.verificaValidacoesFrom(this.formulario);
    }
  }

  postPerson(formulario: FormGroup){
    this.personService.postPerson(formulario)
    .pipe(map(res => res))
    .subscribe(data => {},
    (error: any) => alert('Erro ao enviar Formulário'));
  }

  resetar(){
    this.formulario.reset();
  }

  rediresionar(){
    timer(2000).subscribe( x =>{
      this.router.navigate(['/']);
    });
  }

  verificaValidacoesFrom(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle?.markAsDirty();

      if (controle instanceof FormGroup) {
        this.verificaValidacoesFrom(controle);
      }
    });
  }

  verificaValidTouched(campo: string){
    return !this.formulario.get(campo)?.valid && (!!this.formulario.get(campo)?.touched || !!this.formulario.get(campo)?.dirty);
  }

}
