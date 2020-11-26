import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  // (:26:)W10D1
  path: 'login',
  component: LoginComponent
},{
  path: 'register',
  component: RegisterComponent
}];

@NgModule({
  // (:28:)W10D1
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
