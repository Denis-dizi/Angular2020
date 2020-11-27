import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsListComponent } from './products/list/list.component';
import { AccessManagmentGuard } from './helpers/access-managment.guard';

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
  // (1:11:)W10D1
  component: ProductsListComponent,
  canActivate: [AccessManagmentGuard]
}];

@NgModule({
  // (:28:)W10D1
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
