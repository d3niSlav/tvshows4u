import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../cms-contacts.service';

@Component({
  selector: 'app-contact-messages-list',
  templateUrl: './contact-messages-list.component.html',
  styleUrls: ['./contact-messages-list.component.scss']
})
export class ContactMessagesListComponent implements OnInit {
  messages: any;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contactsService.getAllContactMessages().subscribe((res: any) => {
      this.messages = res;
    });
  }
}
