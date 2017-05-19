import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessInfoRoutingModule } from './business-info-routing.module';
import { BusinessInfoComponent } from './business-info.component';

@NgModule({
  imports: [
    CommonModule,
    BusinessInfoRoutingModule
  ],
  declarations: [BusinessInfoComponent]
})
export class BusinessInfoModule { }
