import { FormDebugComponent } from './form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { ContactPersonComponent } from './contact-person/contact-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { PersonDetailsEditComponent } from './person-details-edit/person-details-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PersonDetailsComponent,
    CreatePersonComponent,
    ContactPersonComponent,
    FormDebugComponent,
    CampoControlErroComponent,
    PersonDetailsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
