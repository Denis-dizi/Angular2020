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
  };

  constructor() { }

  ngOnInit(): void {
    // (:49:)W10D1
    console.log("init Login")
  }

}