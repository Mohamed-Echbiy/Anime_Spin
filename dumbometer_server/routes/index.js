const express = require("express");
const { addDumb, minusDumb } = require("../controller/controller");

//

const router = express.Router();

//

router.post("/api/vote_dumb/:id", addDumb);
router.post("/api/vote_smart/:id", minusDumb);

//

module.exports = router;
