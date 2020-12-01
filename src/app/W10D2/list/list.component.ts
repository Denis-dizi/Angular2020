import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
//(:35:)W10D1 + (:40:)W10D1 copied from app.component.ts
export class ProductsListComponent implements OnInit {
  // (:40:)W10D1 copied from app.component.ts

  list: any[] = [];
  product: Product = new Product({});

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http
      .get('http://localhost/web/api/products/list.php')
      .toPromise()
      .then(
        (response: any) => {

          setTimeout(() => {
            this.list = response; //data load from DB
          }, 0)
          console.log("ngOnInit is running with TimOut() funct.");//(1:20:)
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


  deleteProduct(id: string) {

    const payload = new FormData();
    payload.append('id', id);

    this.http.post(this.getApiUrl("delete.php"), payload)
      .toPromise()
      .then(
        (response) => {

          this.list = this.list.filter((product: any) => product.id !== id);
          console.log("Delete is running");
        },
        (reject) => {
          alert(JSON.stringify(reject));
          console.log(JSON.stringify(reject));
          console.log("Error. Rejected for Delete.");
        }
      )

    console.log(id); //prints id to console
  }



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
            this.product = new Product({}); //gives an error: The specified value "NaN" cannot be parsed, or is out of range. (2:33:)W9D2 about this row
            // console.log(typeof Product);
          },
          (reject) => {
            console.log("Error. Rejected for EditProduct.");
          }
        )
      //update
    } else {
      //create
      this.http.post(this.getApiUrl('add.php'), payload).toPromise()
        .then(
          (response: any) => {
            this.product.id = response.id;
            this.list.push(this.product);
            this.product = new Product({});
            console.log("AddProduct is running.");
          },
          (reject) => {
            console.log("Error. Rejected for AddProduct.");
          }
        )
    }

  }


  getApiUrl(endPoint: string) {
    return "http://localhost/web/api/products/" + endPoint;
  }

}

//(:41:)W10D1 W10D1 copied from app.component.ts
class Product {
  price: Number;
  name: string;
  id: string;
  constructor(data: any) {
    this.price = Number(data.price);
    this.name = data.name;
    this.id = data.id;
  }
}