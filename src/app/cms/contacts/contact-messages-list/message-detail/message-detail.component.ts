import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ContactsService } from '../../cms-contacts.service';
import { ContactMessage } from '../../../../shared/models/contact-message.model';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {
  message: ContactMessage;
  constructor(private route: ActivatedRoute, private contactsService: ContactsService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const messageId = params['id'];
        this.contactsService.getSingleContactMessages(messageId).subscribe((res: ContactMessage) => {
          this.message = new ContactMessage(res);
        });
      }
    );
  }
}
