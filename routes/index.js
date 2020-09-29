const express = require('express');
const router = express.Router();

/**
 * Route for GET Login/Landing Page
 */
router.get('/', (req, res) => {
  res.render('login');
});

/**
 * Router for GET /Dashboard
 */
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;
