import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../login/login.service';
import { User } from './../models/user';
import { AngularFire } from 'angularfire2';

@Injectable()
export class RegisterService {

  constructor(private _angularFire: AngularFire, private _router: Router, private _loginService: LoginService) { }

  registerUser(user: User) {
    return Observable.create(observer => {
      this._angularFire.auth.createUser({email: user.email, password: user.password}).then((authData: any) => {
        this._angularFire.database.list('users').update(authData.uid, {
          name: user.name,
          email: authData.auth.email,
          cpf: user.cpf,
          number: user.number,
          provider: 'email',
        });
        this._loginService.user = user;
        this._loginService.mostrar.emit(true);
        this._router.navigate(['/catalog']);
      }).catch((error: any) => {
        if (error) {
          switch (error.code) {
            case 'INVALID_EMAIL':
              observer.error('E-mail inválido.');
              break;
            case 'EMAIL_TAKEN':
              observer.error('Este e-mail já está sendo utilizado.');
              break;
            case 'NETWORK_ERROR':
              observer.error('Aconteceu algum erro ao tentar se conectar ao servidor, tente novamente mais tarde.');
              break;
            default:
              observer.error(error);
          }
        }
      });
    });
  }
}
