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
  // (2:19)
  users: any = [
    {
      name: "Name-1",
      lastName: "Lastname-1"
    }, {
      name: "Name-2",
      lastName: "Lastname-2"
    }, {
      name: "Name-3",
      lastName: "Lastname-3"
    }
    // (2:36:)
    , {
      name: "Coolyo"
    }, {
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