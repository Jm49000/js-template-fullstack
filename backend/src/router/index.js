const express = require("express");

const AdminRoutes = require("./Adm.routes");
const ProjectRoutes = require("./Project.routes");
const PicturesRoutes = require("./Pictures.routes");
// const TeamRoutes = require("./Team.routes");

const router = express.Router();

router.use("/adm", AdminRoutes);
router.use("/pictures", PicturesRoutes);
router.use("/project", ProjectRoutes);

module.exports = router;
