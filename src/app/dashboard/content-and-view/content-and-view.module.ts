import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';

import { ContentAndViewRoutingModule } from './content-and-view-routing.module';
import { ContentAndViewComponent } from './content-and-view.component';
import { ContentAndViewChildComponent, ContentViewChildItem } from './content-and-view-child/content-and-view-child.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    ContentAndViewRoutingModule
  ],
  declarations: [ContentAndViewComponent, ContentAndViewChildComponent, ContentViewChildItem]
})
export class ContentAndViewModule { }
