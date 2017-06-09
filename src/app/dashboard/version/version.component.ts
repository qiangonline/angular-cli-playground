import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  major: number = 1;
  minor: number = 0;
  constructor() { }

  ngOnInit() {
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

  newMinor() {
    this.minor++;
  }

}
