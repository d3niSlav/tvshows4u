import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-poster',
  template: `
    <a
      class="poster-wrapper"
      [routerLink]="[showUrl]">
      <img
       class="img-fluid"
       alt="{{showTitle}}"
       src="{{showImage}}" />
    </a>
  `,
  styles: [`
    .poster-wrapper {
      display: inline-block;
      width: 100%;
      height: 100%;
    }

   .poster-wrapper img {
      width: 100%;
    }
`]
})

export class PosterComponent {
  @Input() showTitle: string = '';
  @Input() showUrl: string = '';
  @Input() showImage: string = '';

  constructor() {}
}
