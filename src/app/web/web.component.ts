import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  isModalOpen = false;

  constructor() { }

  ngOnInit() {
  }

  handleModalChange(isModalOpen: boolean) {
    this.isModalOpen = isModalOpen
  }

}
