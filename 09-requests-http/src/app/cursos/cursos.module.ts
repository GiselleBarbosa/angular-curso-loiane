import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosFormComponent } from './cursos-form/cursos-form.component';


@NgModule({
  declarations: [
    CursosListaComponent,
    CursosFormComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule,   
  ]
})
export class CursosModule { }
