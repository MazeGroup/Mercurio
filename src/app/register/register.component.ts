import { Component, OnInit } from '@angular/core';

import { RegisterService } from './register.service';
import { User } from './../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(private _registerService: RegisterService) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  register() {
    console.log('aquuasais')
    this._registerService.registerUser(this.user)
      .subscribe(data => {
        
      });
  }

}
