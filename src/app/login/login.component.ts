import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
      email: '',
      password: ''
    };

  constructor(private _loginService: LoginService, 
    private _router: Router) { 
  }

  ngOnInit() {
  }

  login() {
    this._loginService.auth(this.form);
  }

  register() {
    this._router.navigate(['/register']);
  }

}
