import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'input-with-errors',
  templateUrl: './input-with-error.component.html',
  styleUrls: ['./input-with-error.component.scss']
})
export class InputWithErrorComponent implements OnInit {
  @Input() id: string;
  @Input() buttonRedirect: string = null;
  @Input() name: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = null;
  @Input() errorMessage: string = null;
  @Input() value: string = null;
  @Input() label: string = null;
  @Input() labelButtonText: string = null;
  @Input() labelRedirect: string = null;

  constructor() { }

  ngOnInit() {
  }

}
