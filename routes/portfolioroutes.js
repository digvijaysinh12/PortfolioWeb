const express = require('express');
const { sendEmailController } = require('../controllers/portfolioController');

const router = express.Router();

// Route to handle email-sending API
router.post('/sendEmail', sendEmailController);

module.exports = router;
