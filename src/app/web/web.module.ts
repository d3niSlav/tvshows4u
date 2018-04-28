import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';

@NgModule({
  declarations: [
    WebComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class WebModule {}
