import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, AfterViewInit {

  @ViewChild(CountdownTimerComponent)
  countdownTimerComponent;

  seconds() { return 0; }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.countdownTimerComponent.seconds, 0);
  }

  start() {
    this.countdownTimerComponent.start();
  }

  stop() {
    this.countdownTimerComponent.stop();
  }

}
