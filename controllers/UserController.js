const { transaction } = require('objection');

const User = require('../models/User');

const create = async function (req, res) {
  const user = await User.query().first().where({ email: req.body.email });

  if (user) {
    return res.status(409).send({ email: 'Email already exists!' });
  }

  const graph = req.body;
  graph.profile = {
    name: req.body.email.split('@')[0]
  };

  const newUser = await transaction(User.knex(), trx => {
    return (
      User.query(trx)
        .allowInsert('profile')
        .insertGraph(graph)
    );
  });

  return res.send(newUser.getJWT());
};

module.exports.create = create;


const get = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  return res.send(req.user);
};

module.exports.get = get;

const update = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.body.email) {
    const user = await User.query().first().where({ email: req.body.email });

    if (user) {
      return res.status(409).send({ email: 'Email is already registered!' })
    }
  }

  const updatedUser = await User.query().patchAndFetchById(req.user.id, req.body);
  return res.send(updatedUser);
};

module.exports.update = update;

const remove = async function (req, res) {
  await User.query().findById(req.user.id).del();
  return res.status(201).send();
};

module.exports.remove = remove;

const login = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (!req.body.email) {
    return res.status(400).send({ email: 'Please enter an email address!' });
  }

  if (!req.body.password) {
    return res.status(400).send({ password: 'Please enter a password!' });
  }

  const user = await User.query().first().where({ email: req.body.email });
  if (!user) {
    return res.status(401).send({ email: 'Wrong email or password!' });
  }

  const isPasswordValid = await user.verifyPassword(req.body.password);
  if (!isPasswordValid) {
    return res.status(401).send({ email: 'Wrong email or password!' });
  }

  return res.send(user.getJWT());
};

module.exports.login = login;
