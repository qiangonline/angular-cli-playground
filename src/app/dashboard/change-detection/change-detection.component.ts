import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit {

  vip = { name: 'Tom', email: 'a@b.com' };

  data$ = new BehaviorSubject(0);
  counter = 0;
  missions = ['sss', 'aaa'];
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.data$.next(++this.counter);
  }

  changeVip() {
    this.vip = { name: `${Math.random().toString(36).slice(2)}`, email: `${Math.random().toString(36).slice(2)}@b.com` };
  }

  changeVipEmail() {
    this.vip.email = `${Math.random().toString(36).slice(2)}@b.com`;
  }

}
