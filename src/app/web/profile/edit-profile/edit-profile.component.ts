import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  forms = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.initializeProfileEditForm();
    this.initializeEmailEditForm();
    this.initializePasswordEditForm();
  }

  initializePasswordEditForm() {
    this.forms.push({
      form: {
        oldPassword: 'required',
        newPassword: 'required',
        confirmPassword: 'required|equalTo:newPassword'
      },
      controls: [
        {
          name: 'oldPassword',
          label: 'Old password',
          placeholder: 'Enter your old password...',
          type: 'password'
        },
        {
          name: 'newPassword',
          label: 'New password',
          placeholder: 'Enter your new password...',
          type: 'password'
        },
        {
          name: 'confirmPassword',
          label: 'Confirm password',
          placeholder: 'Confirm your new password...',
          type: 'password'
        }
      ],
      url: '/api/profile/password',
      shouldClearForm: true
    });
  }

  initializeEmailEditForm() {
    this.profileService.getUserEmail().subscribe((emailData: any) => {
      this.forms.push({
        form: {
          email: 'required|email'
        },
        values: {
          email: emailData.email
        },
        controls: [
          {
            name: 'email',
            label: 'E-mail',
            placeholder: 'Enter your email address...',
            type: 'email'
          }
        ],
        isResettable: true,
        url: '/api/profile/email'
      });
    });
  }

  initializeProfileEditForm() {
    this.profileService.getUserProfile().subscribe((profileData: any) => {
      this.forms.push({
        form: {
          name: 'required',
          profileImage: 'required'
        },
        values: {
          name: profileData.name,
          profileImage: profileData.profileImage
        },
        controls: [
          {
            name: 'name',
            label: 'Name',
            placeholder: 'Enter your name...',
            type: 'text'
          },
          {
            name: 'profileImage',
            label: 'Image URL',
            placeholder: 'Enter url...',
            type: 'text'
          }
        ],
        isResettable: true,
        url: '/api/profile'
      });
    });
  }
}
