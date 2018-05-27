import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmsModule } from './cms/cms.module';
import { WebModule } from './web/web.module';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FilterArrayPipe } from './shared/pipes/filter-array.pipe';
import { TruncatePipe } from './shared/pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FilterArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    WebModule,
    CmsModule
  ],
  exports: [
    TruncatePipe
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
