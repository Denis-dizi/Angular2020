import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // (1:45:)W10D1
  loginFormData: any = {
    buttonTitle: 'Login'
    // saveFrom: () => {}  // (1:56:)W10D1
  };

  constructor() { }

  ngOnInit(): void {
    // (:49:)W10D1
    console.log("init Login")
    // (1:54:)W10D1
    this.loginFormData.saveFrom = this.login;
  }
  login() {
    console.log("trigger Login")
  }
}