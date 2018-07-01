import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { WebRoutingModule } from '../web-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { ShowsSliderComponent } from './shows-slider/shows-slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    ShowsSliderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    WebRoutingModule
  ]
})
export class HomeModule { }
