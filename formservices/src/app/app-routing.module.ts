import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './views/products/products.component';
import { AddProductsComponent } from './views/add-products/add-products.component';

const routes: Routes = [
  { path:'', redirectTo:'list', pathMatch:'full' },
  { path:'list', component:ProductsComponent },
  { path:'add', component:AddProductsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
