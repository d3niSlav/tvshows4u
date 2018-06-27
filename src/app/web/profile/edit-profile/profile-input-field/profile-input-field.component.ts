import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'profile-input-field',
  templateUrl: './profile-input-field.component.html',
  styleUrls: ['./profile-input-field.component.scss']
})
export class ProfileInputFieldComponent implements OnInit, OnChanges {
  @ViewChild('fileInput') fileInput: ElementRef;
  @Input() control: any = {};
  @Input() form: any = {};
  @Input() shouldSubmit: boolean = false;
  @Input() messages: any = {};
  @Input() errors: any = {};
  inputControl: any;
  selectedFile: File;
  imagesPath: string = '/assets/uploads/img/users/';
  url: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.inputControl = this.form && this.form.formGroup.controls[this.control.name] || {};

    if (this.control.type === 'file' && this.shouldSubmit && this.selectedFile) {
      this.profileService.saveProfileImage(this.selectedFile, this.generateUserProfileImageName(this.selectedFile.name))
        .subscribe((res) => {
          console.log(res);
        });
    }
  }

  triggerClick(event) {
    event.preventDefault();
    this.fileInput.nativeElement.click();
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.form.setValue({
      profileImage: this.imagesPath + this.generateUserProfileImageName(this.selectedFile.name)
    });

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.url = e.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  generateUserProfileImageName(originalName: string) {
    const extension = originalName.split('.').pop();
    const userId = 32;
    return `user-${userId}.${extension}`;
  }
}
