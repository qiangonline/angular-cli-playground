import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';

@Component({
  selector: 'app-version-detail',
  templateUrl: './version-detail.component.html',
  styleUrls: ['./version-detail.component.scss']
})
export class VersionDetailComponent implements OnInit, OnChanges {

  @Input()
  major: number;
  @Input()
  minor: number;

  changeLog: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { [p: string]: SimpleChange }) {
    console.log(changes);
    let log: string[] = [];
    for (let p in changes) {
      let changedProperty = changes[p];
      let to = changedProperty.currentValue;
      if (changedProperty.firstChange) {
        log.push(`Initial value of '${p}' set ${to}`);
      } else {
        log.push(`'${p}' changed from ${changedProperty.previousValue} to ${to}`)
      }
    }
    this.changeLog.push(log.join(','));
  }

}
