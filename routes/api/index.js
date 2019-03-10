const router = require("express").Router();
const wineRoutes = require("./wines");
const userRoutes = require("./userRoutes");

// Book routes
router.use("/wines", wineRoutes);
router.use("/userRoutes", userRoutes);

module.exports = router;
