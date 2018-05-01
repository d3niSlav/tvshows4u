import {Component, Input, OnChanges, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'input-with-errors',
  templateUrl: './input-with-error.component.html',
  styleUrls: ['./input-with-error.component.scss']
})
export class InputWithErrorComponent implements OnInit, OnChanges {
  inputControl: any;
  @Input() id: string;
  @Input() buttonRedirect: string = null;
  @Input() name: string;
  @Input() form: any = {};
  @Input() type: string = 'text';
  @Input() placeholder: string = null;
  @Input() errorMessage: string = null;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.inputControl = this.form && this.form.formGroup.controls[this.name] || {};

    if (_.get(changes, 'disabled.currentValue') === true) {
      this.inputControl.disable && this.inputControl.disable();
    } else {
      this.inputControl.enable && this.inputControl.enable();
    }
  }
}
