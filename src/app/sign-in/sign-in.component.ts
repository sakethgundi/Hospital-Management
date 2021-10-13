import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService} from '../authentication.service';
import { SignInData } from '../signInData';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private AuthenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm:NgForm){
    console.log(signInForm.value);
    const signInData=new SignInData(signInForm.value.email,signInForm.value.password);
    this.AuthenticationService.authenticate(signInData);
  }

}