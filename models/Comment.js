'use strict';

const Model = require('objection').Model;
const CommentsProfiles = require('./CommentsProfiles');
const Profile = require('./Profile');
const TvShow = require('./TvShow');

class Comment extends Model {
  static get tableName() {
    return 'comments';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        commentText: { type: 'string' },
        commentDate: { type: 'dateTime' },
        showId: { type: 'integer' },
        profileId: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: Profile,
        join: {
          from: 'comments.profileId',
          to: 'profiles.id',
          extra: ['name', 'profileImage']
        }
      },
      show: {
        relation: Model.BelongsToOneRelation,
        modelClass: TvShow,
        join: {
          from: 'comments.showId',
          to: 'shows.id',
          extra: ['title']
        }
      },
      likes: {
        relation: Model.HasManyRelation,
        modelClass: CommentsProfiles,
        join: {
          from: 'comments.id',
          to: 'comments_profiles.commentId'
        }
      }
    };
  }
}

module.exports = Comment;
