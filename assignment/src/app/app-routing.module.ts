import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BuyComponent } from './buy/buy.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { TestinomialsComponent } from './testinomials/testinomials.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path : 'team', component:TeamComponent},
  {path: 'testinomials', component:TestinomialsComponent},
  {path:'buy', component:BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
