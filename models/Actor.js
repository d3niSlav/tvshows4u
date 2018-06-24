'use strict';

const Model = require('objection').Model;
const TvShow = require('./TvShow');
const ActorTvShow = require('./ActorTvShow');

class Actor extends Model {
  static get tableName() {
    return 'actors';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        bio: { type: 'string', default: '' },
        actorImage: { type: 'string' },
        thumbnail: { type: 'string' },
        birthdate: { type: 'date' }
      }
    }
  }
}

module.exports = Actor;
