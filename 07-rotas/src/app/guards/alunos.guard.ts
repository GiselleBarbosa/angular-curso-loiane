import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';


export class AlunosGuard implements CanActivateChild {

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree |
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    // console.log(route);
    // console.log(state);

    console.log('AlunosGuard: Guarda de Rota filha');
    
    if (state.url.includes('editar')) {
      // alert('usuário sem acesso');
      
    }

    return true;
  }

}