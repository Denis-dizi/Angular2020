import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // (1:45:)W10D1
  loginFormData: any = {
    buttonTitle: "Login",
    // saveFrom: () => {}  // (1:56:)W10D1
  };

  constructor(
    // (2:07:)W10D1
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    // (:49:)W10D1
    console.log("init Login")
    // (1:54:)W10D1
    this.loginFormData.saveForm = this.login;
  }
  login() {
    console.log("trigger Login")
    // (2:07:)W10D1
    this.http.post('http://localhost/web/api/users/login.php', {}).toPromise()
      .then((response: any) => {
        if (response.has_access) {
          this.router.navigate([""])
        } else {
          alert('No access');
        }
      })
    console.log("trigger login")
  }
}