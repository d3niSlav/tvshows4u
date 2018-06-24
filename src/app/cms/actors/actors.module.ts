import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActorsListComponent } from './actors-list/actors-list.component';
import { EditActorComponent } from './edit-actor/edit-actor.component';
import { ActorsComponent } from './actors.component';
import { ActorsService } from './actors.service';
import { CmsRoutingModule } from '../cms-routing.module';

@NgModule({
  declarations: [
    ActorsComponent,
    ActorsListComponent,
    EditActorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CmsRoutingModule
  ],
  providers: [
    ActorsService
  ]
})
export class ActorsModule {}
