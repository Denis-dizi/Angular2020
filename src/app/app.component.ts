import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //(0:25/52:) W9D2
  // list = [];
  list: any[] = []; //(:52:)

  //(0:25:) W9D2
  constructor(
    private http: HttpClient
  ) { }

  //(0:28:) W9D2
  ngOnInit() {
    this.http
      .get('http://localhost/web/api/products/list.php')
      .toPromise()
      .then(
        (response: any) => {
          this.list = response;
          console.log(response)
          console.log('is found')

        },
        (reject) => {
          console.log(reject)
          console.log('not found')
          alert(reject)
        }
      )
  }
}