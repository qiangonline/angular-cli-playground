import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit {

  vip: { [p: string]: string } = { name: 'Tom', email: 'a@b.com', foo: '' };

  data$ = new BehaviorSubject(0);
  notifier$ = new BehaviorSubject(true);
  cdEnabled = true;
  counter = 0;


  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.data$.next(++this.counter);
  }

  toggleCd() {
    this.cdEnabled = !this.cdEnabled;
    this.notifier$.next(this.cdEnabled);
  }

  changeVip() {
    this.vip = { name: `${Math.random().toString(36).slice(2)}`, email: `${Math.random().toString(36).slice(2)}@b.com` };
  }

  changeVipEmail() {
    this.vip.email = `${Math.random().toString(36).slice(2)}@b.com`;
  }

}
