import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  forms = [];

  constructor() {}

  ngOnInit() {
    this.forms.push(this.initializeProfileEditForm());
    this.forms.push(this.initializeEmailEditForm());
    this.forms.push(this.initializePasswordEditForm());
  }

  initializePasswordEditForm() {
    return {
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
      url: '/api/user/password'
    };
  }

  initializeEmailEditForm() {
    return {
      form: {
        email: 'required|email'
      },
      values: {
        email: 'deni3@mail.bg'
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
      url: '/api/user/email'
    };
  }

  initializeProfileEditForm() {
    return {
      form: {
        name: 'required',
        profileImage: 'required'
      },
      values: {
        name: 'deni',
        profileImage: 'https://avatars0.githubusercontent.com/u/23580705?s=400&u=bbc5b149851ff5be2cbb649582f0bef0cc086098&v=4'
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
    };
  }
}
