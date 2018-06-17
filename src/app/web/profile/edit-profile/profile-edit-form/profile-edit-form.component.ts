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

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.form = new ValidationManager(this.formData.form);

    if (this.formData.values) {
      this.form.setValue(this.formData.values);
    }
  }

  onSubmit() {
    console.log(this.formData.url);
    console.log(this.form.formGroup.value);

    // this.profileService.updateData(this.formData.url, this.form.formGroup.value).subscribe(
    //   (resp: any) => {
    //     console.log(resp);
    //   },
    //   (еrror: any) => {
    //
    //   }
    // );
  }

  onReset() {
    if (this.formData.isResettable && this.formData.values) {
      this.form.setValue(this.formData.values);
    } else {
      this.form.reset();
    }
  }
}
