import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cms-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() getSideNavStateChange = new EventEmitter<boolean>();
  isSideNavCollapsed = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSideNavToggle() {
    this.isSideNavCollapsed = !this.isSideNavCollapsed;
    this.getSideNavStateChange.emit(this.isSideNavCollapsed);
  }

  onCollapsedNavLinkClick() {
    this.isSideNavCollapsed = false;
    this.getSideNavStateChange.emit(this.isSideNavCollapsed);
  }
}
