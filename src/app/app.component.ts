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

  //(2:17/22:) W9D2 can be seen at (2:43:36)
  product: Product = new Product({});


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
          console.log("ngOnInit is running");//(1:20:)
          // console.log(response)
          // console.log('is found')

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
          console.log("Delete is running");
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
        (response: any) => {
          this.product = new Product(response);
          console.log("startEditProduct is running");
        },
        (reject) => {
          alert(JSON.stringify(reject));
          console.log(JSON.stringify(reject));
          console.log("Error. Rejected for startEditProduct.");
        }
      )
  }

  // (2:29:)
  editProduct() {
    const payload = new FormData();

    payload.append('name', this.product.name)
    payload.append('price', "" + this.product.price)
    if (this.product.id) {
      payload.append('id', "" + this.product.id)
      this.http.post(this.getApiUrl('edit.php'), payload).toPromise()
        .then(
          (response) => {
            const index = this.list.findIndex((product) => product.id === this.product.id);
            console.log(index);
            console.log("EditProduct is running.");
            this.list[index] = this.product;
            this.product = new Product({}); //gives an error: The specified value "NaN" cannot be parsed, or is out of range.
            // console.log(typeof Product);
          },
          (reject) => {
            console.log("Error. Rejected for EditProduct.");
          }
        )
      //update
    } else {
      //create
    }

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
  id: string; //(2:43:)

  constructor(data: any) {
    this.price = Number(data.price);
    this.name = data.name;
    this.id = data.id; //(2:43:)
  }
}