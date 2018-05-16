'use strict';

const Model = require('objection').Model;

class ProfileTvShow extends Model {
  static get tableName() {
    return 'profiles_shows';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        profileId: { type: 'integer' },
        showId: { type: 'integer' },
        seasonNumber: { type: 'integer', default: 1 },
        episodeNumber: { type: 'integer', default: 1 },
        isFavourite: { type: 'bool', default: false },
        isWatched: { type: 'bool', default: false },
      }
    };
  }
}

module.exports = ProfileTvShow;
