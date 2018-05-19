'use strict';

const Model = require('objection').Model;

class Episode extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'episodes';
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: {type: 'integer'},
        number: {type: 'integer'},
        title: {type: 'string'},
        plot: {type: 'string'},
        screenshot: {type: 'string'},
        runtime: {type: 'string'},
        releaseDate: {type: 'date'},
        imdbId: {type: 'string'},
        imdbRating: {type: 'string', defaults: 'N/A'},
        showId: {type: 'integer'},
        seasonId: {type: 'integer'},
      }
    }
  }
}

module.exports = Episode;
