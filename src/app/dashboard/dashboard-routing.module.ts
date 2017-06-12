import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', redirectTo: 'version', pathMatch: 'full' },
          { path: 'version', loadChildren: './version/version.module#VersionModule' },
          { path: 'voter', loadChildren: './voter/voter.module#VoterModule' },
          { path: 'countdown', loadChildren: './countdown/countdown.module#CountdownModule' },
          { path: 'mission', loadChildren: './mission/mission.module#MissionModule' },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
