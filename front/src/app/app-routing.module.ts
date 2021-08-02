import { PersonDetailsEditComponent } from './person-details-edit/person-details-edit.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create-person', component: CreatePersonComponent},
    {path: ':id', component: PersonDetailsComponent},
    {path: ':id/edit', component: PersonDetailsEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
