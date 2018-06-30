'use strict';

const CommentController = require('../controllers/CommentController');

module.exports = router => {
  /** Add comment to a TV Show */
  router.post('/api/comment', CommentController.addCommentToTvShow);

  /** Get all comments */
  router.get('/api/comments', CommentController.getComments);

  /** Get all comments for a show */
  router.get('/api/comments/:showId', CommentController.getCommentsByShowId);

  /** Remove comment */
  router.delete('/api/comment/:id', CommentController.removeComment);
};
