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
  nmbr: number = 10;

  ngOnInit() {
    setInterval(() => {
      this.nmbr = Math.random() * 100;
    }, 2000)
  }
}