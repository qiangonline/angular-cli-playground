import { Component, OnInit } from '@angular/core';
import { provideParent } from '../core/provide-parent';

export abstract class Parent { foo: number; }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [provideParent(DashboardComponent, Parent)]
})
export class DashboardComponent implements OnInit {

  foo = 0;
  constructor() { }

  ngOnInit() {

  }

}
