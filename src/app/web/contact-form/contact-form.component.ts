import { Component, OnInit } from '@angular/core';
import { ValidationManager } from 'ng2-validation-manager';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: any;
  message: string;
  isError: boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = new ValidationManager({
      name: 'required',
      email: 'required|email',
      message: 'required'
    });
  }

  sendMessage() {
    const messageData = {
      ...this.contactForm.formGroup.value,
      dateReceived: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };

    this.contactService.sendMessage(messageData).subscribe(response => {
      this.message = 'Thank you for reaching out. Our team will get in touch with you soon!';
      this.isError = false;
    }, error => {
      this.isError = true;
      this.message = 'We are sorry, there was a problem submitting your message!'
    }, () => {
      this.contactForm.reset();
      setTimeout(() => {
        this.message = '';
      }, 5000);
    });
  }
}
