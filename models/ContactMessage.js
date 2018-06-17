'use strict';

const Model = require('objection').Model;

class ContactMessage extends Model {
  static get tableName() {
    return 'contactMessages';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'name',
        'email',
        'message',
        'dateCreated'
      ],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string' },
        message: { type: 'string' },
        dateCreated: { type: 'dateTime' },
        isRead: { type: 'boolean', defaults: false },
        isAnswered: { type: 'boolean', defaults: false }
      }
    };
  }
}

module.exports = ContactMessage;
