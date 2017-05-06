import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { LoginService } from './../login/login.service';

/**
 * @author Artur Ribeiro
 *
 * Class AuthGuard - Controla autenticacao das rotas
 */

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  /**
    * Metodo responsavel por cuidar da autenticacao das rotas
	  *
	  * @param {ActivatedRouteSnapshot} route
    * @param {RouterStateSnapshot} state
  */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    // Verificando se o usuario esta autenticado se sim retorno true.
    // if (this.loginService.usuarioEstaAutenticado()) {
    //   return true;
    // }else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    return true;
  }

}
