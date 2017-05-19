import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      { path: '', redirectTo: 'business-info', pathMatch: 'full' },
      { path: 'business-info', loadChildren: './business-info/business-info.module#BusinessInfoModule', data: { title: 'Business Info' } },
      { path: 'contact-info', loadChildren: './contact-info/contact-info.module#ContactInfoModule', data: { title: 'Contact Info' } },
    ],
    data: { title: 'About' }
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
