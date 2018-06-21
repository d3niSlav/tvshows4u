import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentsListComponent } from './comments-list.component';
import { SingleCommentComponent } from './single-comment/single-comment.component';

@NgModule({
  declarations: [
    CommentFormComponent,
    CommentsListComponent,
    SingleCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommentsModule { }
