import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EveryAdLenderComponent } from './every-ad-lender/every-ad-lender.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'adLender/:id', component:EveryAdLenderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
