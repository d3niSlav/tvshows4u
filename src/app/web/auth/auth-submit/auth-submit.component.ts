import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-submit',
  templateUrl: './auth-submit.component.html',
  styleUrls: ['./auth-submit.component.scss']
})
export class AuthSubmitComponent implements OnInit {
  @Input() id: string;
  @Input() form: any = {};
  @Input() inputValue: string = null;
  @Input() label: string = null;
  @Input() labelButtonText: string = null;
  @Input() labelRedirect: string = null;

  constructor() {
  }

  ngOnInit() {
  }
}
