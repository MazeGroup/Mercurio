import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseApp } from 'angularfire2';

import * as firebase from 'firebase';


@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  product: any = {
    description: '',
    image: '',
    name: '',
    price: 0,
    title: '',
    commission: 0
  };
  products;
  files : FileList; 
  nameFile: any;

  constructor(private _angularFire: AngularFire, private _router: Router) { }

  ngOnInit() {
    this.products = this._angularFire.database.list('products');
  }

  register() {

    const _this = this;
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(this.nameFile).put(this.files);

    uploadTask.on('state_changed', data => {

    }, error =>  {
    }, function() {
      _this.product.image = uploadTask.snapshot.downloadURL;
      _this.products.push(_this.product);
      _this._router.navigate(['register-product']);
      _this.product =  {
        description: '',
        image: '',
        name: '',
        price: 0,
        title: '',
        commission: 0
      };
    });

        
  }

  getFiles(event){ 
      this.files = event.target.files[0];
      this.nameFile = event.target.files[0].name
  } 
}
