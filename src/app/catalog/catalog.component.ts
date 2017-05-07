import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: any;
  filter: any;

  constructor(private _angularFire: AngularFire) { }

  ngOnInit() {
    console.log('asOIAsio')
    this._angularFire.database.list('products')
      .subscribe(data => {
        this.products = data;
      })
  }

  productsSearch() {
    if (this.products) {

      if (this.products.length === 0 || this.filter === undefined
      || this.filter.trim() === '') {
        return this.products.filter((p) => {
          if (p) {
            return true;
          }
          return false;
        });
      }

      return this.products.filter((p) => {
        if (p.name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0) {
          return true;
        }
        return false;
      });
    }
  }

}
