import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
// (1:42:)W10D1
@Input() data: any = {
  buttonTitle: ''
};
  constructor() { }

  ngOnInit(): void {
  }

}
