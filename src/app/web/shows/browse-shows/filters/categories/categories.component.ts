import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'browse-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() category;
  @Output() categoryStateChanged = new EventEmitter<any>();
  isActive: boolean = false;

  constructor() {}

  ngOnInit() {}

  categoryChanged() {
    this.categoryStateChanged.emit({
      category: this.category,
      state: this.isActive
    });
  }
}
