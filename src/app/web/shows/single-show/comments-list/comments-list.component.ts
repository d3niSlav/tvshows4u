import { Component, OnInit } from '@angular/core';
import { SingleShowService } from '../single-show.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  comments = [];

  constructor(private showService: SingleShowService) {}

  ngOnInit() {
    const showId = this.showService.getShowId();

    this.showService.getComments(showId).subscribe(res => {
      this.comments = res;
    });
  }

  handleNewComment(comment: any) {
    this.comments.unshift(comment);
  }
}
