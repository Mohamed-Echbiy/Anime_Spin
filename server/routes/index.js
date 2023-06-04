const express = require("express");
const {
  addToFavorite,
  getFavorites,
  removeFavorite,
} = require("../controller/controller");

//

const router = express.Router();

//
router.get("/api/:id", getFavorites);
router.patch("/api/add/:id", addToFavorite);
router.delete("/api/remove/:id", removeFavorite);

//

module.exports = router;
