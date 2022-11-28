import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API  = `${environment.API}/cursos`

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Curso[]>(this.API)
    .pipe(
      tap(console.log)
    )
  }
}

