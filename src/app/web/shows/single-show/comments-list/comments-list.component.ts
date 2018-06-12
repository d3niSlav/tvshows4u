import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  comments = [];

  constructor() {}

  ngOnInit() {
    this.comments.push({
      user: {
        id: 32,
        name: "Eme wweee",
        profileImage: "https://media.creativemornings.com/uploads/user/avatar/2279/kim_face_circle.jpeg"
      },
      date: "02 May 2017 10:55",
      comment: "Pavlina me turmoziiiii",
      likes: 5
    })
  }

  handleNewComment(comment: any) {
    this.comments.unshift(comment);
  }
}
