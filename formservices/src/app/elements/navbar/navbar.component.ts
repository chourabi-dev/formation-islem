import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  products:any[] = [];

  constructor( private productService:ProductsService ){}
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }


  

}
