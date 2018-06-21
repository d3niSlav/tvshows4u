import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalShowComponent } from './shows-list/personal-show/personal-show.component';
import { PersonalShowsComponent } from './personal-shows.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { WebRoutingModule } from '../../web-routing.module';

@NgModule({
  declarations: [
    PersonalShowsComponent,
    PersonalShowComponent,
    ShowsListComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class PersonalShowsModule { }
