import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-personal-shows',
  templateUrl: './personal-shows.component.html',
  styleUrls: ['./personal-shows.component.scss']
})
export class PersonalShowsComponent implements OnInit {
  shows: any;
  subscription: Subscription;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.shows = this.profileService.getPersonalShows();
    this.subscription = this.profileService.personalShowsChanged.subscribe((shows: any) => {
      this.shows = shows;
    });
  }
}
