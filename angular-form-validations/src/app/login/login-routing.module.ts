import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const login_routes: Routes = [
  
];

@NgModule({
  imports: [ RouterModule.forChild(login_routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {
  
}