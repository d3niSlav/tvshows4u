import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ValidationManager } from 'ng2-validation-manager';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {
  updatePasswordForm: any;
  messages: any;
  token: string;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.token = params.token;
      }
    );

    this.updatePasswordForm = new ValidationManager({
      password: 'required|rangeLength:8,50',
      confirmPassword: 'required|equalTo:password'
    });

    this.updatePasswordForm.setErrorMessage('password', 'equalTo', 'Enter your new password!');
    this.updatePasswordForm.setErrorMessage('password', 'rangeLength', 'Password is to short!');
    this.updatePasswordForm.setErrorMessage('confirmPassword', 'equalTo', 'Passwords does not match!');
    this.updatePasswordForm.setErrorMessage('confirmPassword', 'required', 'Confirm your password');

    this.messages = {
      newPassword: null
    };
  }

  updatePassword() {
    const formData = { ...this.updatePasswordForm.formGroup.value };
    delete formData.confirmPassword;

    if (this.token) {
      this.authService.updateRequestedPasswordReset(this.token, formData).subscribe((response: Response) => {
          this.router.navigate(['/signin']);
        }, error => {
          this.messages.newPassword = error.message;
        }
      );
    }
  }
}
