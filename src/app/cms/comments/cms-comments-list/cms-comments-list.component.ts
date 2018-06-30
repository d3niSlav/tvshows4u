import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-cms-comments-list',
  templateUrl: './cms-comments-list.component.html',
  styleUrls: ['./cms-comments-list.component.scss']
})
export class CmsCommentsListComponent implements OnInit {
  comments: any;
  lastComment: any;

  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.commentsService.getComments().subscribe((res: any) => {
      this.comments = res;
      this.lastComment = [...res].pop();
    });
  }
}
