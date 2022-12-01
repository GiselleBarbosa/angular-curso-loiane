import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from '../cursos-lista/curso';
import { CursosService } from '../cursos-lista/cursos.service';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

  constructor( private service: CursosService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Curso | Observable<any> | Promise<Curso> {

    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({
      id: null,
      nome: null,
    });
  }
}
