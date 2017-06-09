import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { VersionRoutingModule } from './version-routing.module'
import { VersionComponent } from './version.component';
import { VersionDetailComponent } from './version-detail/version-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VersionRoutingModule
  ],
  declarations: [VersionComponent, VersionDetailComponent]
})
export class VersionModule { }
