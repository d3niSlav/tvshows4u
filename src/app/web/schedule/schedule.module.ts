import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DayBoxComponent } from './day-box/day-box.component';
import { ScheduleComponent } from './schedule.component';
import { ScheduleService } from './schedule.service';
import { WebRoutingModule } from '../web-routing.module';

@NgModule({
  declarations: [
    ScheduleComponent,
    DayBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WebRoutingModule
  ],
  providers: [
    ScheduleService
  ]
})
export class ScheduleModule { }
