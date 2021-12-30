import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { SignUpRoutingModule } from './signup-routing.module';

@NgModule({
  imports: [SignUpRoutingModule, 
FormsModule, BrowserModule ],
  exports: [SignUpRoutingModule.components],
  declarations: [ SignUpRoutingModule.components ]
})
export class SignUpModule {

}