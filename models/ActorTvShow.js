'use strict';

const Model = require('objection').Model;
const Actor = require('./Actor');

class ActorTvShow extends Model {
  static get tableName() {
    return 'shows_actors';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        actorId: { type: 'integer' },
        showId: { type: 'integer' },
        character: { type: 'string' }
      }
    };
  }
}

module.exports = ActorTvShow;
