import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  // (1:42:)W10D1
  @Input() data: any = {
    buttonTitle: '',
  };
  
// (2:06:)W10D2
user = {
  username: '',
  password: '',
}

  // (1:50:)(2:13:)W10D1; (2:06:)W10D2 added user: any.
  saveForm = (user: any) => {}
  constructor(
    // (2:11:)W10D1
    private http: HttpClient,
    private router: Router // (2:18:)W10D1
  ) { }

  ngOnInit(): void {
    this.saveForm = this.data.saveForm; //(2:13:)W10D1
    // console.log(this.data); //(1:55:)W10D1
  }
}