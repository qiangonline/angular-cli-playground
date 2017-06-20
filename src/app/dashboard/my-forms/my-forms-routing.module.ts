import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFormsComponent } from './my-forms.component';

const routes: Routes = [
  { path: '', component: MyFormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormsRoutingModule { }
