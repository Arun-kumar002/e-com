const express = require('express');
const { processPayment, sendStripeApi } = require('../controllers/paymentController');
const { isAuthenticatedUser } = require('../middlewares/authenticate');
const router = express.Router();

router.route('/payment/process').post(processPayment);
router.route('/stripeapi').get(sendStripeApi);


module.exports = router;