const route = require('express').Router();
const customers = require('./customers');

route.use('/customers', customers);

module.exports = route;