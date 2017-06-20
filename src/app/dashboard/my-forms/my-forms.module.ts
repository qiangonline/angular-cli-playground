import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { SharedModule } from '../../shared/shared.module';

import { MyFormsRoutingModule } from './my-forms-routing.module';
import { MyFormsComponent } from './my-forms.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MyFormsRoutingModule
  ],
  declarations: [MyFormsComponent]
})
export class MyFormsModule { }
