import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../shows/shows.service';

declare const jQuery: any;

@Component({
  selector: 'app-shows-slider',
  templateUrl: './shows-slider.component.html',
  styleUrls: ['./shows-slider.component.scss']
})
export class ShowsSliderComponent implements OnInit {
  shows: any;
  options: any = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    nextArrow: '<button class="next-arrow"><i class="fa fa-chevron-right"></i></button>',
    prevArrow: '<button class="back-arrow"><i class="fa fa-chevron-left"></i></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  constructor(private showsService: ShowsService) {}

  ngOnInit() {
    this.showsService.getCatalogue().subscribe((res: any) => {
      this.shows = res;
    });

    console.log(jQuery('#horse'));
  }
}
