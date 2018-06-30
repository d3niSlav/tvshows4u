const _ = require('lodash');
const Knex = require('knex');
const morgan = require('morgan');
const express = require('express');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const cors = require('cors');
const promiseRouter = require('express-promise-router');
const path = require('path');
const { Model } = require('objection');
const config = require('./config/config');
const knexConfig = require('./knexfile');
const registerApi = require('./routes');

// Initialize knex.
const knex = Knex(knexConfig.development);
const port = process.env.PORT || config.port;

// Bind all Models to a knex instance.
Model.knex(knex);

const router = promiseRouter();
const app = express()
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use(express.static(path.join(__dirname, 'dist')))
  .use(router)
  .use(cors({origin: '*'}))
  .set('json spaces', 2);

// Register our REST API.
registerApi(router);

// Redirect to front-end
app.use('*', express.static(path.join(__dirname, 'dist')));

app.use((err, req, res, next) => {
  if (err) {
    res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
  } else {
    next();
  }
});

const server = app.listen(port, () => {
  console.log(`Application is listening at port ${server.address().port}`);
});
