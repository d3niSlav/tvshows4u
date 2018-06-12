import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ValidationManager} from 'ng2-validation-manager';
import {AuthService} from '../../../../auth/auth.service';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Output() newCommentAdded = new EventEmitter<any>();
  commentForm: any;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.commentForm = new ValidationManager({
      commentText: 'required'
    });
  }

  onSubmit() {
    const user = this.authService.getCurrentUser();

    if (user) {
      const formData = {
        ...this.commentForm.formGroup.value,
        user: {
          userId: user.id,
          name: user.name,
          profileImage: user.profileImage
        },
        date: new Date()
      };

      this.newCommentAdded.emit(formData);
      this.commentForm.reset();
      console.log(formData);
    }
  }
}
