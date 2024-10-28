import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  // we must create the form !!!
  addForm = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    code: new FormControl('',Validators.required),
    
  });


  constructor(private productService:ProductsService){}




  createProduct(){
    
    // get the data from the form !!

    let body  = this.addForm.value;

    console.log(body);
     

    this.productService.addProduct(body);

    // reset form

    
    this.addForm.reset();
    
  }

}
