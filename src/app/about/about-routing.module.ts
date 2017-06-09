import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../core/auth-guard.service';

import { AboutComponent } from './about.component';
import { AddressInfoComponent } from './address-info/address-info.component';


const routes: Routes = [
  {
    path: ':id',
    component: AboutComponent,
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      { path: 'address-info', component: AddressInfoComponent, data: { title: 'Address Info' } },
      { path: 'business-info', loadChildren: './business-info/business-info.module#BusinessInfoModule', data: { title: 'Business Info' } },
      { path: 'contact-info', loadChildren: './contact-info/contact-info.module#ContactInfoModule', data: { title: 'Contact Info' } },
      { path: '', redirectTo: 'address-info', pathMatch: 'full' }
    ],
    data: { title: 'About' }
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
