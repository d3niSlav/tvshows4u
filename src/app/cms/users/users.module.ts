import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersService } from './users.service';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
