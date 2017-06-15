import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection.component';
import { VipCardComponent } from './vip-card/vip-card.component';
import { VipDetailComponent } from './vip-card/vip-detail/vip-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ChangeDetectionRoutingModule
  ],
  declarations: [ChangeDetectionComponent, VipCardComponent, VipDetailComponent]
})
export class ChangeDetectionModule { }
