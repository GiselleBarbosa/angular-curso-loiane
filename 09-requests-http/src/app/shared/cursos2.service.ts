import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { Curso } from '../cursos/cursos-lista/curso';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudService<Curso> {

  constructor(protected override http: HttpClient) {
    super(http, `${environment.API}/cursos`);
   }
}
