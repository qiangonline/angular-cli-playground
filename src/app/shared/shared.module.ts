import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdIconModule, MdInputModule } from '@angular/material';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MdButtonModule, MdIconModule, MdInputModule, HighlightDirective],
  declarations: [HighlightDirective]
})
export class SharedModule { }
