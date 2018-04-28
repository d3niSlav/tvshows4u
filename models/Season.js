'use strict';

const Model = require('objection').Model;

class Season extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'seasons';
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'description',
        'number',
        'poster',
        'releaseYear'
      ],

      properties: {
        id: { type: 'integer' },
        description: { type: 'string' },
        number: { type: 'integer' },
        releaseYear: { type: 'integer' },
        showId: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      show: {
        relation: Model.BelongsToOneRelation,
        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one. We use the file path version
        // here to prevent require loops.
        modelClass: __dirname + '/TvShow',
        join: {
          from: 'seasons.showId',
          to: 'shows.id'
        }
      }
    };
  }
}

module.exports = Season;
