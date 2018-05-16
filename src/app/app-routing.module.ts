import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web/web.component';
import { CmsComponent } from './cms/cms.component';

const appRoutes: Routes = [
  { path: '', loadChildren: './web/web.module#WebModule', pathMatch: 'full' },
  { path: 'cms', loadChildren: './cms/cms.module#CmsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
