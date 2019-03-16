exports.get_landing = function(req, res, next) {
  res.render("landing", { title: "NewsLetter Diary" });
};

exports.submit_lead = function(req, res, next) {
  console.log(req.body.email);
  res.redirect('/');
};
