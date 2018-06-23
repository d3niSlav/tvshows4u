export class ContactMessage {
  public name: string;
  public email: string;
  public message: string;
  public dateCreated: string;
  public isRead: boolean = false;
  public isAnswered: boolean = false;

  constructor(messageData: {
    name: string,
    email: string,
    message: string,
    dateCreated: string,
    isRead: boolean,
    isAnswered: boolean
  }) {
    this.name = messageData.name;
    this.email = messageData.email;
    this.message = messageData.message;
    this.isRead = this.isRead || false;
    this.isAnswered = this.isAnswered || false;
    this.dateCreated = this.dateCreated || new Date().toISOString().slice(0, 19).replace('T', ' ');
  }
}