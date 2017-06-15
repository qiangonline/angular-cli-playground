import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  foo = 0;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.foo++;
    }, 1000);
  }

}
