import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../shared/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  closeModal() {
    this.modalService.close('sign-in');
    this.modalService.close('sign-up');
  }
}
