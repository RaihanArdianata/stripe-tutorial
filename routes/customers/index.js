const route = require('express').Router();
const customers = require('../../controllers/customers');

route.get('/', customers.getCustomers);
route.get('/:customer_id', customers.getCustomersById);
// route.post('/', customers.getCustomers);
// route.put('/:customer_id', customers.getCustomersById);
// route.delete('/:id', customers.getCustomers);

module.exports = route;