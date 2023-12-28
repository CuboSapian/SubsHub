const express = require('express');
const router = express.Router();

router.post("/checkout" , require('../controllers/paymentController.js').checkout)
router.post("/paymentverification" , require('../controllers/paymentController.js').paymentVerification)

module.exports = router