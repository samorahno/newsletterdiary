var express = require("express");
var router = express.Router();
var landing = require("../controllers/landing");

/* GET home page. */
router.get("/", landing.get_landing);

router.post("/", landing.submit_lead);

router.get("/leads", landing.show_leads);

router.get("/lead/:leadid", landing.show_lead);

router.get("/lead/:leadid/edit", landing.show_edit_lead);

router.post("/lead/:leadid/edit", landing.edit_lead);

router.post("/lead/:leadid/delete", landing.delete_lead);

router.get("/users", function(req, res, next) {
  res.json({
    message: "welcome here",
    status: 200
  });
});

module.exports = router;
