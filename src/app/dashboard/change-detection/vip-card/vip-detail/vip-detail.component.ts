import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vip-detail',
  templateUrl: './vip-detail.component.html',
  styleUrls: ['./vip-detail.component.scss']
})
export class VipDetailComponent implements OnInit {

  @Input()
  vip;

  constructor() { }

  ngOnInit() {
  }

  changeVip() {
    this.vip.name = 'ssssssssssssssss';
  }

}
