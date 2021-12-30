import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  submit(form:any){
    var firstName = form.firstName;
    console.log(firstName);
  
    var lastName = form.lastName;
    console.log(lastName);

    var email = form.email;
    console.log(email);

    var pwd = form.pwd;
    console.log(pwd);

    var mobile = form.mobile;
    console.log(mobile);

    var dob = form.dob;
    console.log(dob);
  
    var add = form.add;
    console.log(add);
  }
}
