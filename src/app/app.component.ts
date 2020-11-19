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


}