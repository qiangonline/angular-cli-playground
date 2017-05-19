import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoRoutingModule } from './contact-info-routing.module';
import { ContactInfoComponent } from './contact-info.component';

@NgModule({
  imports: [
    CommonModule, ContactInfoRoutingModule
  ],
  declarations: [ContactInfoComponent]
})
export class ContactInfoModule { }
