import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import * as $ from 'jquery';

@Component({
  selector: 'modal',
  template: '<ng-content></ng-content>'
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = $(el.nativeElement);
  }

  ngOnInit(): void {
    let modal = this;

    if (!this.id) {
      console.error('Modal must have an ID!');
      return;
    }

    this.element.appendTo('body');

    this.element.on('click', function (e: any) {
      const target = $(e.target);
      if (!target.closest('.modal-body').length) {
        modal.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.show();
    $('body').addClass('modal-open');
  }

  close(): void {
    this.element.hide();
    $('body').removeClass('modal-open');
  }
}