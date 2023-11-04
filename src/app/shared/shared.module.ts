import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { SubjectsComponent } from './subjects/subjects.component';


@NgModule({
  declarations: [
    SharedComponent,
    HomeComponent,
    RegsiterComponent,
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonModule,
    FieldsetModule
  ],
  exports:[
    HomeComponent
  ]
})
export class SharedModule { }
