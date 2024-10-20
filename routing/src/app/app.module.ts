import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { NavbarComponent } from './componenet/navbar/navbar.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { TeamDetailsPageComponent } from './pages/team-details-page/team-details-page.component';
import { CompanyComponent } from './pages/company/company.component';
import { EmployeesComponent } from './pages/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    TeamPageComponent,
    NavbarComponent,
    ErrorPageComponent,
    TeamDetailsPageComponent,
    CompanyComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
