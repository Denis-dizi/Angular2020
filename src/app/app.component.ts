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
    console.log("ngOnInit is running");//(1:20:)
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
  // (1:41:)
  deleteProduct(id: string) {
  // (1:48:)
  const payload = new FormData();
  payload.append('id', id);
  
  // (1:41:)
  // this.http.post('http://localhost/web/api/products/delete.php', {
    //   id: id
    // }).toPromise()
    this.http.post("http://localhost/web/api/products/delete.php", payload).toPromise()
      .then(
        (response) => {
          // (1:55:)
          this.list = this.list.filter((product: any)=>product.id !==id);

          console.log("Fine. Delete finded");
        },
        (reject) => {
          alert(JSON.stringify(reject));
          console.log(JSON.stringify(reject));
          console.log("Error. Rejected for Delete.");
        }
      )
    console.log(id); //prints id to console
  }


}