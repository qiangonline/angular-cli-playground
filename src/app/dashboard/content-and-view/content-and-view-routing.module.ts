import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentAndViewComponent } from './content-and-view.component';

const routes: Routes = [
  { path: '', component: ContentAndViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentAndViewRoutingModule { }
