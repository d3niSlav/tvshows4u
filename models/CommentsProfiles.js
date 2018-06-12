'use strict';

const Model = require('objection').Model;

class CommentsProfiles extends Model {
  static get tableName() {
    return 'comments_profiles';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        commentId: { type: 'integer' },
        profileId: { type: 'integer' }
      }
    };
  }
}

module.exports = CommentsProfiles;
