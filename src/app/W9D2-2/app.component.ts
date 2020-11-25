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

  //(2:17/22:) W9D2
  product: Product = new Product({});


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
    // (1:48:)
    // this.http.post("http://localhost/web/api/products/delete.php", payload).toPromise()
    // (2:13:)
    this.http.post(this.getApiUrl("delete.php"), payload)
      .toPromise()
      .then(
        (response) => {
          // (1:55:)
          this.list = this.list.filter((product: any) => product.id !== id);
          console.log("Fine. Delete finded");
        },
        (reject) => {
          alert(JSON.stringify(reject));
          console.log(JSON.stringify(reject));
          console.log("Error. Rejected for Delete.");
        }
      )
    // (1:41:)
    console.log(id); //prints id to console
  }


  // (2:09:)
  startEditProduct(id: string) {
    console.log(id); //prints id to console
    // console.log(typeof id);
    this.http.get(this.getApiUrl("get.php?id=" + id))
      .toPromise()
      .then(
        // (response: any) => {// ????????????????????????????????????????????????????????????????????
        (response) => {
          this.product = new Product(response);
          console.log("Fine. Edit finded");
        },
        (reject) => {
          alert(JSON.stringify(reject));
          console.log(JSON.stringify(reject));
          console.log("Error. Rejected for Edit.");
        }
      )
  }
  // (2:11:)
  getApiUrl(endPoint: string) {
    return "http://localhost/web/api/products/" + endPoint;
  }

}

  //(2:17:) W9D2
class Product {
  price: Number;
  name: string;
  id: Number;

  constructor(data: any) {
    this.price = Number(data.price);
    this.name = data.name;
    this.id = Number(data.id);
  }
}