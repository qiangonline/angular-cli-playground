import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { MyFormsRoutingModule } from './my-forms-routing.module';
import { MyFormsComponent } from './my-forms.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MyFormsRoutingModule
  ],
  declarations: [MyFormsComponent]
})
export class MyFormsModule { }
