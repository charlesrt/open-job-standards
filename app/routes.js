var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

  res.render('index');

});

// Route JSON job data to template variables and script string
router.get('/search-open-jobs/job/:id', function(req, res) {
  var fs = require('fs');
  var data = fs.readFileSync(__dirname + '/assets/data/jobs.json', 'utf-8');
      data = JSON.parse(data);

  res.render('search-open-jobs/job', {
    job : data.jobs[req.params.id],
    jobString: JSON.stringify(data.jobs[req.params.id])
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
