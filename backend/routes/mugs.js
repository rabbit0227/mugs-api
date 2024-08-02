const express = require("express");
const router = express.Router();
const Mug = require("../models/Mug");

// Get all mugs
router.get("/", async (req, res) => {
  try {
    const mugs = await Mug.find();
    res.json(mugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new mug
router.post("/", async (req, res) => {
  const mug = new Mug({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });

  try {
    const newMug = await mug.save();
    res.status(201).json(newMug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
