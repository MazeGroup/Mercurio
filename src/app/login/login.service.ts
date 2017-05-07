import { Observable } from 'rxjs/Rx';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../models/user';
import { DataService } from './../data-service.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class LoginService {

  user: User;
  mostrar = new EventEmitter<boolean>();

  constructor(private _angularFire: AngularFire, private _router: Router, private data: DataService) { }

  auth(credentials) {
    this.loginWithEmail(credentials)
      .subscribe(data => {
        this.getUserData().subscribe(data => {
           this.mostrar.emit(true);
          this._router.navigate(['']);
        });
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

  userExist() {
    if (this.user) {
      return true;
    }else {
      return false;
    }
  }

  getUserData() {
    return Observable.create(observer => {
      this._angularFire.auth.subscribe(authData => {
        if (authData) {
          this.data.object('users/' + authData.uid).subscribe(userData => {
            console.log(userData);
            this.user = userData;
            observer.next(userData);
          });
        } else {
          observer.error();
        }
      });
    });
  }

}
