'use strict';

const Model = require('objection').Model;
const TvShow = require('./TvShow');
const ProfileTvShow = require('./ProfileTvShow');

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

  static get relationMappings() {
    return {
      shows: {
        relation: Model.ManyToManyRelation,
        modelClass: TvShow,
        join: {
          from: 'profiles.id',
          through: {
            modelClass: ProfileTvShow,
            from: 'profiles_shows.profileId',
            to: 'profiles_shows.showId',
            extra: ['seasonNumber', 'episodeNumber', 'isFavourite', 'isWatched']
          },
          to: 'shows.id'
        }
      }
    };
  }
}

module.exports = Profile;
