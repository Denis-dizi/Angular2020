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
    // (2:04/11:) W10D2 added user/payload
  register(user: any) {
    // const payload = new FormData();
    // payload.append('username', user.username)
    // payload.append('password', user.password)

    console.log("trigger Register");
    // console.trace("trigger Register");
    // (1:20/24/27:) W10D2
    this.http.post('http://localhost:8002/users/add', user).toPromise()
      .then((response: any) => {
      })
  }
}