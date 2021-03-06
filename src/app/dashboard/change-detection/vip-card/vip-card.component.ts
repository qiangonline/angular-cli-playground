import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, SimpleChanges, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-vip-card',
  templateUrl: './vip-card.component.html',
  styleUrls: ['./vip-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VipCardComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  @Input()
  vip;

  @Input()
  data: Observable<number>;

  @Input()
  notifier: Observable<boolean>;

  counter = 0;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.data.subscribe((value) => {
      this.counter = value;
      //this.cd.detectChanges();
      this.cd.markForCheck();
    });

    this.notifier.subscribe((value) => {
      console.log(`notifier:${value}`);
      if (value) {
        this.cd.reattach();
      } else {
        this.cd.detach();
      }
    });



  }

  ngOnChanges(changes: SimpleChanges) {
    for (let p in changes) {
      let changedProperty = changes[p];
      let to = changedProperty.currentValue;
      if (changedProperty.firstChange) {
        console.log(`Initial value of "${p}" set ${to}`);
      } else {
        console.log(`"${p}" changed from ${changedProperty.previousValue} to ${to}`)
      }
    }

  }

  ngDoCheck() {
    console.log(`check:${this.vip}`);
  }

  ngAfterContentInit() {
    console.log(`content init.`);
  }

  ngAfterContentChecked() {
    console.log(`content checked.`);
  }

  ngAfterViewInit() {
    console.log(`view init.`);
  }

  ngAfterViewChecked() {
    console.log(`view checked.`);
  }

  resetCounter() {
    this.counter = 0;
  }

  detect() {
    //this.cd.markForCheck();
    this.cd.detectChanges();
  }

}
