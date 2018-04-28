'use strict';

const Model = require('objection').Model;

class Profile extends Model {
  static get tableName() {
    return 'profiles';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', default: '' },
        profileImage: { type: 'string' }
      }
    };
  }
}

module.exports = Profile;
