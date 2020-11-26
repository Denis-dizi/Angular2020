import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // (1:46:)W10D1
  registerFormData: any = {
    buttonTitle: 'Register'
  };

  constructor() { }

  ngOnInit(): void {
    // (:49:)W10D1
    console.log("init Register")
  }

}
