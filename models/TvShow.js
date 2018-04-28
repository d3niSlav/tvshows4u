'use strict';

const Model = require('objection').Model;
const Season = require('./Season');

class Show extends Model {
  static get tableName() {
    return 'shows';
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'title',
        'year',
        'releaseDate',
        'status',
        'runtime',
        'genre',
        'plot',
        'language',
        'country',
        'awards',
        'poster',
        'logo',
        'imdbRating',
        'imdbID',
        'totalSeasons'
      ],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string' },
        year: { type: 'string' },
        releaseDate: { type: 'date' },
        status: { type: 'string' },
        runtime: { type: 'string' },
        genre: { type: 'string' },
        plot: { type: 'string' },
        language: { type: 'string' },
        country: { type: 'string' },
        awards: { type: 'string' },
        poster: { type: 'string' },
        logo: { type: 'string' },
        imdbRating: { type: 'float' },
        imdbID: { type: 'string' },
        totalSeasons: { type: 'integer' },
        trailer: { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
      seasons: {
        relation: Model.HasManyRelation,
        modelClass: Season,
        join: {
          from: 'shows.id',
          to: 'seasons.showId'
        }
      }
    };
  }
}

module.exports = Show;
