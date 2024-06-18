const express = require("express");

const Joi = require("joi");

const router = express.Router();

// create unique id
let nextId = 5;

// Create default items in shopping list

const ITEMS = [
  { id: 1, item: "Shirt", createdAt: new Date() },
  { id: 2, item: "Shoe", createdAt: new Date() },
  { id: 3, item: "Pants", createdAt: new Date() },
  { id: 4, item: "Monitor", createdAt: new Date() },
];

// create joi validation schema

const schema = Joi.object({
  item: Joi.string().required(),
});

// Get the full list of the shopping list items

router.get("/", (req, res) => {
  res.json(ITEMS);
});

// Get a single item by the ID

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const item = ITEMS.find((i) => i.id === parseInt(id, 10));
  if (!item) {
    return res.status(400).json({ error: "Item not found " });
  }
  res.json(item);
});

// POST method: Create a new item

router.post("/", (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const newItem = {
    id: nextId++,
    item: req.body.item,
    createdAt: new Date(),
  };
  ITEMS.push(newItem);
  res.status(201).json(newItem);
});

// PUT method: Update an item by the ID

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { item } = req.body;
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const index = ITEMS.findIndex((i) => i.id === parseInt(id, 10));
  if (index === -1) {
    return res.status(404).json({ error: "Item not gfound" });
  }
  ITEMS[index].item = item;
  res.json(ITEMS[index]);
});

// Delete method: Delete an item by ID

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = ITEMS.findIndex((i) => parseInt(id, 10));
  if (index === -1) {
    return res.status(404).json({ error: "Item not gfound" });
  }
  const deletedItem = ITEMS.splice(index, 1);
  res.json(deletedItem[0]);
});

module.exports = router;
