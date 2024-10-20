import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { TeamDetailsPageComponent } from './pages/team-details-page/team-details-page.component';
import { CompanyComponent } from './pages/company/company.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { DemoGuard } from './demo.guard';

const routes: Routes = [
  { path:'', redirectTo:'home' , pathMatch:'full' },
  { path:'home', component:HomePageComponent },
  { path:'about', component:AboutPageComponent },

  { path:'team', component:TeamPageComponent,  canActivate:[DemoGuard] ,  children:[
    { path:'company', component:CompanyComponent },
    { path:'employees', component:EmployeesComponent },
    
  ]},

  { path:'team/details/:id', component:TeamDetailsPageComponent  },
  // wild card
  { path: '**', component:ErrorPageComponent  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
