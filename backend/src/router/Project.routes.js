const express = require("express");

const { ProjectController } = require("../controllers");

const router = express.Router();

router.get("/", ProjectController.browse);
router.get("/:id", ProjectController.read);
router.post("/", ProjectController.add);
router.put("/:id", ProjectController.edit);
router.delete("/:id", ProjectController.delete);

module.exports = router;
