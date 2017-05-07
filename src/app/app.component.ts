import { Component, OnInit } from '@angular/core';

import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  mostrar: boolean;

  constructor(private _loginService: LoginService) {

  }

  ngOnInit() {
    this._loginService.mostrar.subscribe(
      (mostrar: boolean) => {
        this.mostrar = mostrar;
      }
    );

  }
}
