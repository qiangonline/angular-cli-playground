import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { VoterRoutingModule } from './voter-routing.module';
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VoterRoutingModule
  ],
  declarations: [VoterComponent, VoteTakerComponent]
})
export class VoterModule { }
