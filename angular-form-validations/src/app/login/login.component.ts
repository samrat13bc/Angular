import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    dob: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }

}
