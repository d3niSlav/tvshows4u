import {Component, OnInit} from '@angular/core';
import {ShowsService} from '../shows.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {
  show: any;

  constructor(private showsService: ShowsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let tvShowId;

    this.route.params.subscribe(
      (params: Params) => {
        tvShowId = +params['id'];
      }
    );

    this.showsService.getTvShow(tvShowId).subscribe(res => {
      this.show = res;
    });
  }

}
