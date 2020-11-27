import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // (2:20:)W10D1
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  logOut() {
    console.log("trigger log out");
    this.http.get('http://localhost/web/api/users/logOut.php').toPromise()
      .then(() => {
        this.router.navigate(["/login"]);
      }
      )
  }
}
// (:41:)W10D1. cleared, copied to ather files (list.component.ts).