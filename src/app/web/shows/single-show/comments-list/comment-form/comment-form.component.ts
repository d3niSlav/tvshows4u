import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ValidationManager } from 'ng2-validation-manager';

import { AuthService } from '../../../../auth/auth.service';
import { SingleShowService } from '../../single-show.service';
import { ModalService } from '../../../../../shared/services/modal.service';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Output() newCommentAdded = new EventEmitter<any>();
  commentForm: any;

  constructor(
    private authService: AuthService,
    private modalService: ModalService,
    private showService: SingleShowService) {}

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
        profileId: user.id,
        commentDate: new Date().toISOString().slice(0, 19).replace('T', ' ')
      };

      this.showService.addComment(formData).subscribe(res => {
        this.newCommentAdded.emit(res);
        this.commentForm.reset();
      });
    } else {
      this.modalService.open('sign-in');
    }
  }
}
