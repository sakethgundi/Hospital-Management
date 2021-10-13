import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path:'' , component:SignInComponent
  },
  {
    path:'welcome-page', component:WelcomePageComponent
  },
  {
    path:'personal-info' ,component:PersonalInfoComponent
  },
  {
    path:'add-employee' , component:AddEmployeeComponent
  },
  {
    path:'search-employee' , component:SearchEmployeeComponent
  },
  {
    path:'employee-details' , component:EmployeeDetailsComponent
  },
  {
    path:'all-employees' , component:AllEmployeesComponent
  },
  {
    path:'sign-up' , component:SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents=[
  SignInComponent, 
  PersonalInfoComponent, 
  AddEmployeeComponent,
  SearchEmployeeComponent,
  EmployeeDetailsComponent,
  AllEmployeesComponent,
  SignUpComponent,
  WelcomePageComponent
]
