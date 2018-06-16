import { Component, Input, OnInit } from '@angular/core';

const STAR_FULL = 'star';
const STAR_HALF_FULL = 'star-half-o';
const STAR_EMPTY = 'star-o';
const STARS_COUNT = 10;
const MAX_RATING = 10;

@Component({
  selector: 'rating-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() rating: string = 'N/A';
  stars = [];

  constructor() {}

  ngOnInit() {
    this.createStars();
  }

  createStars() {
    let stars = new Array(STARS_COUNT);
    stars.fill(STAR_EMPTY);

    let fullStarsCount = 0;
    let maxFullRating = Math.floor(+this.rating);
    for (let starIndex = 0; starIndex < maxFullRating; starIndex++) {
      stars[starIndex] = STAR_FULL;
      fullStarsCount++;
    }

    if ((+this.rating * STARS_COUNT) % MAX_RATING >= MAX_RATING / 2) {
      stars[fullStarsCount] = STAR_HALF_FULL;
    }

    this.stars = stars;
  }
}
