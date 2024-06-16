const express = require('express');

const emojis = require('./emojis');

const items = require('./shoppingItems');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/shoppingItems', items);

module.exports = router;
