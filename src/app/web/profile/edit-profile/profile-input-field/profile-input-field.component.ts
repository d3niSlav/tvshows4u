import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'profile-input-field',
  templateUrl: './profile-input-field.component.html',
  styleUrls: ['./profile-input-field.component.scss']
})
export class ProfileInputFieldComponent implements OnInit, OnChanges {
  inputControl: any;
  @Input() control: any = {};
  @Input() form: any = {};

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.inputControl = this.form && this.form.formGroup.controls[this.control.name] || {};
  }
}
