import {Component, OnInit} from '@angular/core';
import {ProfileService} from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData = {};

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.getUserProfile().subscribe((response: Response) => {
      this.profileData = response;
      console.log(this.profileData);
    }, error => {
      console.log(error);
    });
  }

}
