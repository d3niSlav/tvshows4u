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
    const authenticationToken = sessionStorage.getItem('jwtToken');

    if (authenticationToken) {
      this.profileService.getUserProfile(authenticationToken).subscribe((response: Response) => {
        this.profileData = response;
        console.log(this.profileData);
      }, error => {
        console.log(error);
      });
    }
  }

}