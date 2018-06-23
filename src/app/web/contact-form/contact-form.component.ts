import { Component, OnInit } from '@angular/core';
import { ValidationManager } from 'ng2-validation-manager';

import { ContactService } from './contact.service';
import { ContactMessage } from '../../shared/models/contact-message.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: any;
  message: string;
  isError: boolean = false;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactForm = new ValidationManager({
      name: 'required',
      email: 'required|email',
      message: 'required'
    });
  }

  sendMessage() {
    if (this.contactForm.isValid()) {
      const messageData = new ContactMessage(this.contactForm.formGroup.value);
      this.contactService.sendMessage(messageData).subscribe(response => {
        this.isError = false;
        this.message = 'Thank you for reaching out. Our team will get in touch with you soon!';
      }, error => {
        this.isError = true;
        this.message = 'We are sorry, there was a problem submitting your message!';
      }, () => {
        this.contactForm.reset();
        setTimeout(() => {
          this.message = '';
        }, 5000);
      });
    } else {
      this.isError = true;
      this.message = this.getFirstErrorMessage();
    }
  }

  getFirstErrorMessage() {
    const errors = this.contactForm.getErrors();
    return Object.values(errors).find(error => error.trim().length > 0);
  }
}
