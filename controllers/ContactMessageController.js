const ContactMessage = require('../models/ContactMessage');

const createContactMessage = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const contactMessage = await ContactMessage.query().insert(req.body);

  if (!contactMessage) {
    return res.status(500).send({ error: 'Something went wrong!' });
  }

  return res.send(contactMessage);
};

module.exports.createContactMessage = createContactMessage;


const getAllContactMessages = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const contactMessages = await ContactMessage.query();

  if (!contactMessages) {
    return res.status(404).send({ error: 'No contact messages found!' });
  }

  return res.send(contactMessages);
};

module.exports.getAllContactMessages = getAllContactMessages;

const getSingleContactMessage = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const contactMessage = await ContactMessage.query().findById(req.params.id);

  if (!contactMessage) {
    return res.status(404).send({ error: 'Contact message with ID: ' + req.params.id + ' found!' });
  }

  return res.send(contactMessage);
};

module.exports.getSingleContactMessage = getSingleContactMessage;

const updateContactMessage = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const contactMessage = await ContactMessage.query().patchAndFetchById(req.params.id, req.body);

  if (!contactMessage) {
    return res.status(404).send({ error: 'Contact message with ID: ' + req.params.id + ' found!' });
  }

  return res.send(contactMessage);
};

module.exports.updateContactMessage = updateContactMessage;

const deleteContactMessage = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const numberOfDeletedContactMessages = await ContactMessage.query().findById(req.params.id).del();

  if (numberOfDeletedContactMessages <= 0) {
    return res.status(404).send({ error: 'Contact message with ID: ' + req.params.id + ' found!' });
  }

  return res.status(201).send();
};

module.exports.deleteContactMessage = deleteContactMessage;
