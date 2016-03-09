var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

  res.render('index');

});

router.get('/open-jobs/search', function(req, res) {
  var fs = require('fs');
  var data = fs.readFileSync(__dirname + '/assets/data/jobs.json', 'utf-8');
      data = JSON.parse(data);

  res.render('open-jobs/search', {jobs: data.jobs});
});

// Route JSON job data to template variables and script string
router.get('/open-jobs/job/:id', function(req, res) {
  var fs = require('fs');
  var data = fs.readFileSync(__dirname + '/assets/data/jobs.json', 'utf-8');
      data = JSON.parse(data);

  res.render('open-jobs/job', {
    job : data.jobs[req.params.id],
    jobString : JSON.stringify(data.jobs[req.params.id]),
    jobID : [req.params.id]
  });
});

// Route job API
router.get('/api/jobs/:id', function(req, res) {
  var fs = require('fs');
  var data = fs.readFileSync(__dirname + '/assets/data/jobs.json', 'utf-8');
      data = JSON.parse(data);

res.json(data.jobs[req.params.id]);
});

module.exports = router;
