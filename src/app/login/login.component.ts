import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { SignInData } from '../signInData';
import { Router } from '@angular/router';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm:NgForm){
    console.log(signInForm.value);
    const signInData=new SignInData(signInForm.value.email,signInForm.value.password);
    this.AuthenticationService.authenticate(signInData);
  }

}