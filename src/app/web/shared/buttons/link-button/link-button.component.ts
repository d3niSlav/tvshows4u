import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'link-button',
  template: `
    <a class="link-button"
       [routerLink]="[showUrl]">
      <ng-content></ng-content>
    </a>
  `,
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent implements OnInit {
  @Input() showUrl: string = '';

  constructor() { }

  ngOnInit() {
  }

}
