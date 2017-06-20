import { QueryList, Component, OnInit, AfterViewInit, ContentChild, ContentChildren, ViewChild, ViewChildren, ElementRef } from '@angular/core';

import { ContentAndViewChildComponent } from './content-and-view-child/content-and-view-child.component';
@Component({
  selector: 'app-content-and-view',
  templateUrl: './content-and-view.component.html',
  styleUrls: ['./content-and-view.component.scss']
})
export class ContentAndViewComponent implements OnInit, AfterViewInit {
  @ViewChildren(ContentAndViewChildComponent)
  viewChildren: QueryList<ContentAndViewChildComponent>;

  @ViewChild(ContentAndViewChildComponent)
  viewChild: ContentAndViewChildComponent;


  @ViewChild('tag')
  tag: ElementRef;

  @ContentChild(ContentAndViewChildComponent)
  contentChild: ContentAndViewChildComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    console.log(this.viewChildren);
    console.log(this.viewChild);
    console.log(this.tag);
  }

  trace() {
    console.log(this.contentChild);

  }

}
