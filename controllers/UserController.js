const { transaction } = require('objection');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const config = require('../config/config');
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

const getUserEmail = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const userData = await User.query().first().where({
    profileId: req.user.id
  });

  if (!userData) {
    return res.status(404).send({ error: 'User not found!'});
  }

  return res.send({ email: userData.email });
};

module.exports.getUserEmail = getUserEmail;

const changeUserEmail = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const user = await User.query().first().where({ email: req.body.email });
  if (user && user.profileId !== req.user.id) {
    return res.status(409).send({ error: 'E-mail is already in use!' });
  }

  const userData = await User.query().first().patch({
    email: req.body.email
  }).where({
    profileId: req.user.id
  });

  if (userData <= 0) {
    return res.status(404).send({ error: 'User not found!' });
  }

  return res.send({ email: "E-mail successfully changed!" });
};

module.exports.changeUserEmail = changeUserEmail;

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

const changePassword = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  if (!req.body.oldPassword || !req.body.newPassword) {
    return res.status(400).send({ oldPassword: 'Old and new password are required!' });
  }

  let user = await User.query().first().where({ profileId: req.user.id });
  if (!user) {
    return res.status(401).send({ oldPassword: 'User not found!' });
  }

  const isPasswordValid = await user.verifyPassword(req.body.oldPassword);
  if (!isPasswordValid) {
    return res.status(401).send({ oldPassword: 'Wrong password!' });
  }

  user = await User.query().patchAndFetchById(user.id, {
    password: req.body.newPassword
  });

  if (!user) {
    return res.status(500).send({ error: 'Something went wrong!' });
  }

  return res.status(200).send({ oldPassword: 'Password changed successfully!'});
};

module.exports.changePassword = changePassword;


const requestForgottenPassword = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const user = await User.query().first().where({ email: req.body.email });

  if (user) {
    const updatedUser = await User.query().patchAndFetchById(user.id, {
      passwordResetExpirationDate: new Date(Date.now() + config.passwordResetTokenDuration).toISOString().slice(0, 19).replace('T', ' '),
      passwordResetToken: crypto.randomBytes(20).toString('hex')
    });

    if (!updatedUser) {
      return res.status(500).send({
        message: 'Something went wrong!',
        type: 'error'
      });
    }

    const smtpTransport = nodemailer.createTransport({
      service: config.mail.service,
      auth: {
        user: config.mail.user,
        pass: config.mail.password
      }
    });

    const mailOptions = {
      to: updatedUser.email,
      from: 'TV-Shows for U' + '<' + config.mail.user + '>',
      subject: 'TV-Show Password Reset Token',
      text: 'You have requested a password reset. Here is yout reset token.\n\n' +
      'Click the link to complete the process.\n' +
      'http://' + req.hostname + ':' + 4200 + '/reset-password/' + updatedUser.passwordResetToken + '\n\n'
    };

    await smtpTransport.sendMail(mailOptions)
      .then((data) => {
        return res.send({
          message: "Check your mail to reset your password!",
          type: 'information'
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: 'Something went wrong!',
          type: 'error'
        });
      });
  } else {
    return res.send({
      message: "Password change request sent!",
      type: 'information'
    });
  }
};

module.exports.requestForgottenPassword = requestForgottenPassword;


const updateForgottenPassword = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let user = await User.query().first().where({
    passwordResetToken: req.params.token
  });

  if (user) {
    const tokenExpirationDate = new Date(user.passwordResetExpirationDate).getTime();
    const currentDate = new Date(Date.now() - 3 * 60 * 60 * 1000).getTime();

    if (currentDate <= tokenExpirationDate + config.passwordResetTokenDuration) {
      user = await User.query().patchAndFetchById(user.id, {
        password: req.body.password,
        passwordResetExpirationDate: new Date('1900/1/1').toISOString().slice(0, 19).replace('T', ' ')
      });

      if (!user) {
        return res.status(500).send({
          message: 'Something went wrong!'
        });
      }

      const smtpTransport = nodemailer.createTransport({
        service: config.mail.service,
        auth: {
          user: config.mail.user,
          pass: config.mail.password
        }
      });

      const mailOptions = {
        to: user.email,
        from: 'TV-Shows for U' + '<' + config.mail.user + '>',
        subject: 'TV-Shows Password Change',
        text: 'The password for ' + user.email + ' has been updated successfully.'
      };

      await smtpTransport.sendMail(mailOptions)
        .then((data) => {
          return res.send({ message: 'Password changed successfully!' });
        })
        .catch((err) => {
          return res.status(500).send({ message: 'Something went wrong!' });
        });
    } else {
      return res.status(400).send({
        message: "Token expired!"
      });
    }
  } else {
    return res.send({
      message: "Password change request sent!",
      type: 'information'
    });
  }
};

module.exports.updateForgottenPassword = updateForgottenPassword;