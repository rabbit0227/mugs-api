const Mug = require("../models/Mug");

// Get all mugs
exports.getAllMugs = async (req, res) => {
  try {
    const mugs = await Mug.find();
    res.json(mugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a mug by ID
exports.getMugById = async (req, res) => {
  try {
    const mug = await Mug.findById(req.params.id);
    if (!mug) return res.status(404).json({ message: "Mug not found" });
    res.json(mug);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new mug
exports.createMug = async (req, res) => {
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
};
