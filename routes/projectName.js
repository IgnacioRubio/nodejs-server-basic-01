const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, err) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

router.get('/contact', (req, res, err) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
});

router.get('/features', (req, res, err) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'features.html'));
});

router.get('/about', (req, res, err) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'about.html'));
});

router.get('/services', (req, res, err) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'services.html'));
});

module.exports = router;