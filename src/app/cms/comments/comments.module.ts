import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { CmsCommentsListComponent } from './cms-comments-list/cms-comments-list.component';
import { CmsRoutingModule} from '../cms-routing.module';
import { CommentsService } from './comments.service';

@NgModule({
  declarations: [
    CmsCommentsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CmsRoutingModule
  ],
  providers: [
    CommentsService
  ]
})
export class CommentsModule {}
