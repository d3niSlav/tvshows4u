import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';
import { SlideComponent } from './slide/slide.component';
import { SharedModule } from '../shared/shared.module';
import { WebRoutingModule } from '../web-routing.module';

@NgModule({
  declarations: [
    AboutUsComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    WebRoutingModule
  ]
})
export class AboutUsModule { }
