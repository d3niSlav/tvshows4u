import { Component, Input, ElementRef, AfterContentInit } from '@angular/core';
declare const jQuery: any;

@Component({
  selector: 'slick-slider',
  template: `<ng-content></ng-content>`
})
export class SlickSliderComponent implements AfterContentInit {
  @Input() options: any;
  $element: any;
  defaultOptions: any = {};

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    for (let key in this.options) {
      this.defaultOptions[key] = this.options[key];
    }

    this.$element = jQuery(this.el.nativeElement).slick(this.defaultOptions);
  }
}