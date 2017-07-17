import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-product-component',
  templateUrl: './build-product-component.component.html',
  styleUrls: ['./build-product-component.component.css']
})
export class BuildProductComponentComponent implements OnInit {

  allTheProducts: any[]=[];

  constructor() { }

  ngOnInit() {
  }

  addProductToArray(theProduct){
    this.allTheProducts.push(theProduct);
  }

}
