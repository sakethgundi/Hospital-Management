import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AddEmployeeComponent } from './add-employee/add-employee.component';
//import { PersonalInfoComponent } from './personal-info/personal-info.component';
// import { SearchEmployeeComponent } from './search-employee/search-employee.component';
// import { AllEmployeesComponent } from './all-employees/all-employees.component';
 import { SignInComponent } from './sign-in/sign-in.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
// import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
//import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    //AddEmployeeComponent,
   // PersonalInfoComponent,
    // SearchEmployeeComponent,
    // AllEmployeesComponent,
     SignInComponent,
   // WelcomePageComponent,
    // EmployeeDetailsComponent,
    // SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
