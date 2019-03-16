const models = require('../models');

exports.get_landing = function(req, res, next) {
  res.render("landing", { title: "NewsLetter Diary" });
};

exports.submit_lead = function(req, res, next) {
  return models.Lead.create({
    email: req.body.email,
  }).then(lead => res.redirect('/'));
  
};
