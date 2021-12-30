import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup.component';

const signup_routes: Routes = [
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(signup_routes) ],
  exports: [ RouterModule ]
})
export class SignUpRoutingModule {
  static components = [ SignupComponent ];
}