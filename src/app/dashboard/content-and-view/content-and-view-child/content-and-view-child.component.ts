import { Component, Directive, QueryList, OnInit, AfterContentInit, ElementRef, HostBinding, ContentChildren, ContentChild } from '@angular/core';

@Directive({
  selector: 'div'
})
export class ContentViewChildItem { }

@Component({
  selector: 'app-content-and-view-child',
  templateUrl: './content-and-view-child.component.html',
  styleUrls: ['./content-and-view-child.component.scss']
})
export class ContentAndViewChildComponent implements OnInit, AfterContentInit {

  @HostBinding('style.backgroundColor')
  bg;

  @ContentChild(ContentViewChildItem, { read: ElementRef })
  contentChild: ContentViewChildItem;

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  ngAfterContentInit() {

    console.log(this.contentChild);
  }

  changeBg() {
    this.bg = `rgba(${Math.random() * 256 << 0},${Math.random() * 256 << 0},${Math.random() * 256 << 0},1)`;
  }

}
