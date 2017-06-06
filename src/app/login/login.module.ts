import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdIconModule, MdButtonModule } from '@angular/material';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule, MdButtonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule { }
