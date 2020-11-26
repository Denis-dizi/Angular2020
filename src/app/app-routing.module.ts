import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsListComponent } from './products/list/list.component';

const routes: Routes = [{
  // (:26:)W10D1
  path: 'login',
  component: LoginComponent
},{
  path: 'register',
  component: RegisterComponent
},{
  // (:35:)W10D1
  path: '',
  component: ProductsListComponent
}];

@NgModule({
  // (:28:)W10D1
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
