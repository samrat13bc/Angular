import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {LoginRoutingModule} from './login-routing.module';


@NgModule({
  imports: [ LoginRoutingModule,
FormsModule, ReactiveFormsModule,BrowserModule],
  
  
})
export class LoginModule {

}