import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { EditProfileModule } from './edit-profile/edit-profile.module';
import { PersonalShowsModule } from './personal-shows/personal-shows.module';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';
import { UserCardComponent } from './user-card/user-card.component';
import { WebRoutingModule } from '../web-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebRoutingModule,
    EditProfileModule,
    PersonalShowsModule
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
