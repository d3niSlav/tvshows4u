import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.scss']
})
export class SingleCommentComponent implements OnInit {
  @Input() comment: any;

  constructor() {
  }

  ngOnInit() {
  }

}
