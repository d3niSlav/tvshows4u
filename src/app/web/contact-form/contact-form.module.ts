import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ContactFormComponent } from './contact-form.component';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactService
  ]
})
export class ContactFormModule { }
