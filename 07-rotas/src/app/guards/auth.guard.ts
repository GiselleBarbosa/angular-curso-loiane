import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()

export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree |
    Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> {

    console.log('AuthGuard');

    return this.verificarAcesso();

  }

  private verificarAcesso() {

    if (this.AuthService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    console.log('canLoad: verificando se o usuário pode carregar o metodo do modulo ...');
    return this.verificarAcesso()

  }

}