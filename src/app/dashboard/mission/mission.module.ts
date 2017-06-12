import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';

import { MissionRoutingModule } from './mission-routing.module';
import { MissionComponent } from './mission.component';
import { MissionService } from './mission.service';
import { AstronautComponent } from './astronaut/astronaut.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MissionRoutingModule
  ],
  declarations: [MissionComponent, AstronautComponent],
  providers: [MissionService]
})
export class MissionModule { }
