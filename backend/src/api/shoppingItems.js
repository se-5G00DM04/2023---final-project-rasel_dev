const express = require("express");

const router = express.Router();

// Create default items in shopping list

const ITEMS = [
  { id: 1, item: "Shirt" },
  { id: 2, item: "Shoe" },
  { id: 3, item: "Pants" },
];

// Get the full list of the shopping list items

router.get("/", (req, res) => {
  res.json(ITEMS);
});

module.exports = router;