import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My 1-st title in Angular';
  name = 'Di';
  lastName = 'Zi';
  nmbr: number = 0;
  count1: number = 0;
  count2: number = 0;
  // (2:42)
  password = '';
  // (2:19)
  // users: any = [
  // (2:53:)
  users: User[] = [
    {
      name: "Name-1",
      lastName: "Lastname-1",
      age: 12 //(2:56:)
    }, {
      name: "Name-2",
      lastName: "Lastname-2"
    }, {
      name: "Name-3",
      lastName: "Lastname-3"
    }
    // (2:36:)
    , {
      name: "Coolyo",
      lastName: ''
    }, {
      name: '',
      lastName: "G-Paradise"
    }
  ];

// (1:41:~)
  ngOnInit() {
    setInterval(() => {
      this.nmbr = Math.random() * 100;
    }, 2000)
  }

// (1:52:)
triggerClick() {
  this.count1 ++;
  console.log(this.count1)
}
// (1:56:)
addOne() {
  this.count2++;
}
remooveOne() {
  this.count2--;
}
// (2:26:)
clearAllClicks() {
  this.count2 = 0;
}
}

// (2:53:)
class User {
  name: string;
  // lastName: string;
  lastName ?: string;
  age ? : number; //(2:56:)

  constructor(parameters: any) {
    // this.name = parameters.name;
    // this.lastName = parameters.lastName;
    // (2:58:)
    this.name = parameters.name || 'unspecified name';
    this.lastName = parameters.lastName || 'unspecified LNmae';
    this.age = parameters.age || 'unspecified age'; //(2:56:)

  }
}