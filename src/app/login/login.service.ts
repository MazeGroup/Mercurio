import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class LoginService {

  constructor(private _angularFire: AngularFire, private _router: Router) { }

  auth(credentials) {
    this.loginWithEmail(credentials)
      .subscribe(data => {
        this._router.navigate(['/catalog']);
      });
  }

  loginWithEmail(credentials) {
    return Observable.create(observer => {
      this._angularFire.auth.login(credentials, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((authData) => {
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

}
