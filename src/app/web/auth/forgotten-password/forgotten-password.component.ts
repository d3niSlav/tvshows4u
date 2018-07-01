import { Component, OnInit } from '@angular/core';
import { ValidationManager } from 'ng2-validation-manager';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styles: [`
    .success-wrapper {
      min-height: 170px;
    }

    .success-message {
      margin: 25px 0 20px;
      padding: 10px 0;
      color: #228B22;
      font-size: 1.5rem;
      background-color: #FFFFFF;
      border: 4px solid #228B22;
      border-radius: 10px;
    }

    a {
      color: #FFFFFF;
      transition: color 0.3s ease;
    }
    
    @media screen and (min-width: 480px) {
      a {
        color: #000000;
      }
    }
    
    a:hover {
      color: #8B0000;
    }
  `]
})
export class ForgottenPasswordComponent implements OnInit {
  forgottenPasswordForm: any;
  isSuccess: boolean = false;
  hasErrors: boolean = false;
  message: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.forgottenPasswordForm = new ValidationManager({
      email: 'required|email'
    });
  }

  requestPassword() {
    this.authService.requestPasswordRequest(this.forgottenPasswordForm.formGroup.value).subscribe((res: any) => {
      if (res.type !== 'error') {
        this.isSuccess = true;
        this.hasErrors = false;
      } else {
        this.hasErrors = true;
      }

      this.message = res.message;
    });
  }
}
