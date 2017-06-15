import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-vip-card',
  templateUrl: './vip-card.component.html',
  styleUrls: ['./vip-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VipCardComponent implements OnInit {

  @Input()
  vip;

  @Input()
  data$: Observable<number>;

  counter = 0;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.data$.subscribe((value) => {
      this.counter = value;
      this.cd.markForCheck();
    });
  }

  resetCounter() {
    this.counter = 0;
  }

  detect() {
    this.cd.detectChanges();
  }

}
