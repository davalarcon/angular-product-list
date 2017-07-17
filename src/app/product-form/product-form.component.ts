import {
   Component,
   OnInit,
   Output,
   EventEmitter
 } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  theNewProduct: any = {}
  productError: any = {}

  @Output() onProductAdd = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  addThisProduct(){
    this.productError={};

    if(!this.theNewProduct.name){
      this.productError.name = "Need a name";
    }
    if(!this.theNewProduct.price){
      this.productError.price = "Need a price"
    }
    // if(this.theNewProduct.description){
    //   this.productError.description = "Need a description"
    // }
    else if(!this.productError.name && !this.productError.price){
      this.onProductAdd.emit(this.theNewProduct);
      this.theNewProduct = {};
    }
  }

}
