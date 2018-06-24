import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMessagesListComponent } from './contact-messages-list/contact-messages-list.component';
import { ContactsService } from './contacts.service';
import { MessageDetailComponent } from './contact-messages-list/message-detail/message-detail.component';
import { CmsRoutingModule } from '../cms-routing.module';

@NgModule({
  declarations: [
    ContactMessagesListComponent,
    MessageDetailComponent
  ],
  imports: [
    CmsRoutingModule,
    CommonModule
  ],
  providers: [
    ContactsService
  ]
})
export class ContactsModule {}
