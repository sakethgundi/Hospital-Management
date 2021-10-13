import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  title = 'Hospital-Management';

public JD:string='Joining Date';
public ID:string='ID';
public Name:string='Name';
public Birth:string='Birthdate';
public Gender:string='Gender';
public Email:string='Email ID';
public Mobile:string='Mobile number';
public Aadhar:string='Aadhar number';
public Country:string='Country';
public State:string='State';
public City:string='City';
public Address:string='Address';
public Role:string='Role';
public Qualification:string='Qualification';
public Specialization:string='Specialization'

/* public Data: any=
[
  {
    JD:"Joining date",
    ID:"ID",
    Name:"Name",
    Birth:"Birthdate",
    Gender:"Gender",
    Email:"Email ID",
    Mobile:"Mobile number",
    Aadhar:"Aadhar number",
    Country:"Country",
    State:"State",
    City:"City",
    Address:"Address",
    Role:"Role",
    Qualification:"Qualification",
    Specialization:"Specialization"
  }
] */
}