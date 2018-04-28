import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CmsComponent } from './cms.component';

@NgModule({
  declarations: [
    CmsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class CmsModule {}
