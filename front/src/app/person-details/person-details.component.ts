import { PersonService } from './../shared/service/person.service';
import { Person } from './../shared/model/person.model';
import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  id!: number;
  inscricao!: Subscription;
  person!: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.getPersonId(this.id);
      }
    );
  }

  getPersonId(id: number){
    this.personService.getPersonsId(id).subscribe(data => {
      this.person = data;
    });
  }

  deletePersonId(id: number){
    this.personService.deletePerson(id).subscribe(data =>{})

    this.redirecionar();
  }

  editarContato(){
    this.router.navigate([`${this.id}/edit`]);
  }

  excluirContato(){
    if(confirm('Tem certeza que deseja excluir usuario?')){
      this.deletePersonId(this.id)
    }
  }

  redirecionar(){
    timer(800).subscribe( x =>{
      this.router.navigate(['/']);
    });
  }

}
