import { Component, Input, OnInit } from '@angular/core';
import { ValidationManager } from 'ng2-validation-manager';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.scss']
})
export class ProfileEditFormComponent implements OnInit {
  @Input() formData: any;
  form: any;
  messages: any[];
  errors: any[];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    if (this.formData){
      this.form = new ValidationManager(this.formData.form);

      if (this.formData.values) {
        this.form.setValue(this.formData.values);
      }

      if (this.formData.errorMessages) {
        this.formData.errorMessages.forEach((errorMessage: any) => {
          this.form.setErrorMessage(errorMessage.field, errorMessage.rule, errorMessage.message);
        });
      }
    }
  }

  onSubmit() {
    if (this.form.isValid()) {
      this.profileService.updateData(this.formData.url, this.form.formGroup.value).subscribe(
        (resp: any) => {
          this.messages = resp;
          setTimeout(() => {
            this.messages = null;
          }, 10000);

          if (this.formData.shouldClearForm) {
            this.form.reset();
          }
        },
        (err: any) => {
          this.errors = err.error;

          if (this.formData.shouldClearForm) {
            this.form.reset();
          }
        }
      );
    }
  }

  onReset(event: Event) {
    event.preventDefault();

    if (this.formData.isResettable && this.formData.values) {
      this.form.setValue(this.formData.values);
    } else {
      this.form.reset();
    }
  }
}
