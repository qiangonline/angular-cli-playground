import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '../../shared/shared.module';

import { CountdownRoutingModule } from './countdown-routing.module';
import { CountdownComponent } from './countdown.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    CountdownRoutingModule
  ],
  declarations: [CountdownComponent, CountdownTimerComponent]
})
export class CountdownModule { }
