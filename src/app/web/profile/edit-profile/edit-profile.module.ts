import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ProfileEditFormComponent } from './profile-edit-form/profile-edit-form.component';
import { ProfileInputFieldComponent } from './profile-input-field/profile-input-field.component';
import { EditProfileComponent } from './edit-profile.component';

@NgModule({
  declarations: [
    EditProfileComponent,
    ProfileInputFieldComponent,
    ProfileEditFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditProfileModule { }
