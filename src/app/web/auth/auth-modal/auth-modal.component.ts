import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {
  @Output() getModalStateChange = new EventEmitter<boolean>();
  isModal = false;

  constructor() {
  }

  ngOnInit() {
  }

  closeModal() {
    this.isModal = false;
    this.getModalStateChange.emit(false);
  }

}
