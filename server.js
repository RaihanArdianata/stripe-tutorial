require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json({
  // We need the raw body to verify webhook signatures.
  // Let's compute it only when hitting the Stripe webhook endpoint.
  verify: function (req, res, buf) {
    if (req.originalUrl.startsWith('/webhook')) {
      req.rawBody = buf.toString();
    }
  }
}));


// app.get("/customers", async (req, res) => {
//   req.params
//   try {
//     const customers = await stripe.customers.list();
//     res.json({ customers: customers.data });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

app.use('/api', routes);

app.listen(3000, () => {
  console.log('====================================');
  console.log('listening at port 3000');
  console.log('====================================');
});