import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupComponent } from './popup/popup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  // { path: 'login', component: LoginComponent },
  { path: 'popup', component: PopupComponent, outlet: 'popup' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
