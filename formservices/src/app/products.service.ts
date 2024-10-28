import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: any[] = [];




  constructor() { }

  // method to push data in the list
  addProduct(product: any) {
    this.products.push(product);
  }

  // get data
  getProducts(): any[] {
    return this.products; // API
  }


}
