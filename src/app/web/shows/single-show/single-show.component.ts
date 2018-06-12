import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SingleShowService } from './single-show.service';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {
  show: any;

  constructor(private showService: SingleShowService, private route: ActivatedRoute) {}

  ngOnInit() {
    let tvShowId;

    this.route.params.subscribe(
      (params: Params) => {
        tvShowId = +params['id'];
      }
    );

    if (tvShowId) {
      this.showService.getTvShow(tvShowId).subscribe(res => {
        this.show = res;
        this.showService.setCurrentShow(res);
      });
    }
  }
}
