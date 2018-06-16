'use strict';

const Model = require('objection').Model;
const TvShow = require('./TvShow');

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

  static get relationMappings() {
    return {
      showData: {
        relation: Model.HasManyRelation,
        modelClass: TvShow,
        filter: query => query.select('id', 'title', 'status', 'plot', 'logo', 'poster'),
        join: {
          from: 'profiles_shows.showId',
          to: 'shows.id',
          select: 'shows.title'
        }
      }
    };
  }
}

module.exports = ProfileTvShow;
