import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared.component';
import { RegsiterComponent } from './regsiter/regsiter.component';

const routes: Routes = [
  { path: '', component: SharedComponent },
  {path:'resgiter',component:RegsiterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
