var express = require("express");
var router = express.Router();
var index = require("../controllers/landing");

/* GET home page. */
router.get("/", index.index);

router.get("/users", function(req, res, next) {
  res.json({
    message: "welcome here",
    status: 200
  });
});

module.exports = router;
