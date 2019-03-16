const models = require('../models');

exports.get_landing = function(req, res, next) {
  res.render("landing", { title: "NewsLetter Diary" });
};

exports.submit_lead = function(req, res, next) {
  return models.Lead.create({
    email: req.body.email,
  }).then(lead => res.redirect('/leads'));
  
};

exports.show_leads = function(req, res, next) {
  return models.Lead.findAll()
  .then(result => res.render('landing', {
    page_title: 'List of Subscribers',
    leads: result,
  }));
}

exports.show_lead = function(req, res, next){
  return models.Lead.findOne({
    where: {
      id: req.params.leadid,
    } 
  })
  .then(lead => res.render('lead', {
    title: 'Lead Details',
    lead: lead,
  }));
}

exports.show_edit_lead = function(req, res, next){
  return models.Lead.findOne({
    where: {
      id: req.params.leadid,
    } 
  })
  .then(lead => res.render('lead_edit', {
    title: 'Edit Lead',
    lead: lead,
  }));
}

exports.edit_lead = function(req, res, next){
  return models.Lead.update({
    email: req.body.email
  }, {
    where: {
      id: req.params.leadid,
    }
  }).then(result => res.redirect('/lead/' + req.params.leadid));
}

