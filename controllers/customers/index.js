const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY); // u can pass api_key per method with param api_key

class Controller {
  static async getCustomers(req, res, next) {
    try {
      const customers = await stripe.customers.list({
        stripeAccount: process.env.STRIPE_ACCOUNT
      });
      res.json({ customers: customers.data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async getCustomersById(req, res, next) {
    try {
      const { customer_id } = req.params;
      const customer = await stripe.customers.retrieve(customer_id, {
        stripeAccount: process.env.STRIPE_ACCOUNT
      });
      res.json({ customer });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;