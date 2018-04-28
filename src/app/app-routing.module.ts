import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web/web.component';
import { CmsComponent } from './cms/cms.component';

const appRoutes: Routes = [
  { path: '', component: WebComponent, pathMatch: 'full' },
  { path: 'cms', component: CmsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
