import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // (1:46:)W10D1
  registerFormData: any = {
    buttonTitle: 'Register',
    // saveFrom: () => {}  // (1:56:)W10D1  
  };

  constructor(
    // (1:20:) W10D2
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // (:49:)W10D1
    console.log("init Register")
    // (1:52:)W10D1
    this.registerFormData.saveForm = this.register;
    // console.log(this.registerFormData); //(1:58:)W10D1
  }
  register() {
    console.log("trigger Register");
    // console.trace("trigger Register");
    // (1:20/24/27:) W10D2
    this.http.post('http://localhost:8002/users/add', {}).toPromise()
      .then((response: any) => {
      })
  }
}