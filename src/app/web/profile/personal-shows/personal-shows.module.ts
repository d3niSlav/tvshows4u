import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalShowsComponent } from './personal-shows.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { SharedModule } from '../../shared/shared.module';
import { WebRoutingModule } from '../../web-routing.module';

@NgModule({
  declarations: [
    PersonalShowsComponent,
    ShowsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WebRoutingModule
  ]
})
export class PersonalShowsModule { }
