import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CategoriesComponent } from './browse-shows/filters/categories/categories.component';
import { FilterArrayPipe } from '../../shared/pipes/filter-array.pipe';
import { FiltersComponent } from './browse-shows/filters/filters.component';
import { NewestShowsComponent } from './newest-shows/newest-shows.component';
import { OrderComponent } from './browse-shows/filters/order/order.component';
import { RatedShowsComponent } from './rated-shows/rated-shows.component';
import { SharedModule } from '../shared/shared.module';
import { ShowsComponent } from './browse-shows/shows.component';
import { ShowsService } from './shows.service';
import { SingleShowModule } from './single-show/single-show.module';
import { SortPipe } from '../../shared/pipes/sort.pipe';
import { WebRoutingModule } from '../web-routing.module';

@NgModule({
  declarations: [
    CategoriesComponent,
    FilterArrayPipe,
    FiltersComponent,
    NewestShowsComponent,
    OrderComponent,
    RatedShowsComponent,
    SortPipe,
    ShowsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SingleShowModule,
    SharedModule,
    WebRoutingModule
  ],
  providers: [
    ShowsService
  ]
})
export class ShowsModule { }
