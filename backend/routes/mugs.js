const express = require("express");
const router = express.Router();
const mugsController = require("../controllers/mugsController");

router.get("/", mugsController.getAllMugs);
router.get("/:id", mugsController.getMugById);
router.post("/", mugsController.createMug);

module.exports = router;
