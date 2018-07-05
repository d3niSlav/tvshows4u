import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {
  isSideNavToggled = false;

  constructor() {}

  ngOnInit() {}

  handleSideNav(isSideNavToggled) {
    this.isSideNavToggled = isSideNavToggled;
  }
}
