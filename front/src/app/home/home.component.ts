import { PersonService } from './../shared/service/person.service';
import { Person } from './../shared/model/person.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  geraPerson!: any;

  persons!: Person[];

  constructor(
    public personService: PersonService
  ) { }

  ngOnInit() {
    this.getPersons();
    // this.personService.postPerson();
  }

  getPersons(){
    this.personService.getPersons().subscribe(data => {
      this.persons = data;

      console.log(this.persons);
    });
  }

}
