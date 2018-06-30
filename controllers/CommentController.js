const Comment = require('../models/Comment');

const addCommentToTvShow = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const comment = await Comment.query().insert(req.body).eager('[user likes]');

  if (!comment) {
    res.status(500).send({error: 'Something went wrong!'});
  }

  return res.send(comment);
};

module.exports.addCommentToTvShow = addCommentToTvShow;

const removeComment = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const deletedComment = await Comment.query().findById(req.params.id).eager('likes').del();

  if (!deletedComment) {
    res.status(500).send({error: 'Something went wrong!'});
  }

  return res.send({message: 'Comment successfully deleted!'});
};

module.exports.removeComment = removeComment;

const getComments = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const comments = await Comment.query().eager('[likes, user, show]').orderBy('commentDate', 'desc');

  if (!comments) {
    return res.status(500).send({ error: 'Something went wrong!' });
  }

  return res.send(comments);
};

module.exports.getComments = getComments;

const getCommentsByShowId = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const comments = await Comment.query()
    .eager('[likes, user]')
    .where({
      showId: req.params.showId
    })
    .orderBy('commentDate', 'desc');

  if (!comments) {
    return res.status(404).send({ error: 'No comments found for this TV Show!' });
  }

  return res.send(comments);
};

module.exports.getCommentsByShowId = getCommentsByShowId;