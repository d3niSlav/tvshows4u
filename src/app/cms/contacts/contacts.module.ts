import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ContactMessagesListComponent } from './contact-messages-list/contact-messages-list.component';
import { MessageDetailComponent } from './contact-messages-list/message-detail/message-detail.component';
import { ContactsService } from './cms-contacts.service';
import { CmsRoutingModule } from '../cms-routing.module';

@NgModule({
  declarations: [
    ContactMessagesListComponent,
    MessageDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CmsRoutingModule,
  ],
  providers: [
    ContactsService
  ]
})
export class ContactsModule {}
