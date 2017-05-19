import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessInfoComponent } from './business-info.component';

const routes: Routes = [
  { path: '', component: BusinessInfoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessInfoRoutingModule { }
