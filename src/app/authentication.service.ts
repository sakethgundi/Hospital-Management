import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from './signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser=new SignInData("admin@gmail.com","admin");

  isAuthenticated=false;
  constructor(private router:Router) { }

  authenticate(SignInData:SignInData):boolean{
    if(this.checkCredentials(SignInData)){
      this.isAuthenticated=true;
      this.router.navigate(['welcome-page']);
      return true;
    }
    this.isAuthenticated=false;
    return false;
  }
  private checkCredentials(SignInData:SignInData):boolean{

   return this.checkEmail(SignInData.getEmail())&& this.checkPassword(SignInData.getPassword());

  }
  private checkEmail(email:string):boolean{
     return email===this.mockedUser.getEmail();
  }
  private checkPassword(password:string):boolean{
     return password===this.mockedUser.getPassword();
  }
}