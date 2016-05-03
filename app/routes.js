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

// Route JSON DWP job data
router.get('/dwp/search', function(req, res) {
  var fs = require('fs');
  var moment = require('moment');
  var data = fs.readFileSync(__dirname + '/assets/data/dwp.json', 'utf-8');
      data = JSON.parse(data);
      for (job in data.jobs) {
        time = data.jobs[job].dateClosing;
        console.log(time);
        time = moment(time).toNow();
        console.log(time);
      var test = time;
      console.log(test);
      }

  res.render('dwp/search', {jobs: data.jobs,
  time: test});
});

router.get('/dwp/job/:id', function(req, res) {
  var fs = require('fs');
  var data = fs.readFileSync(__dirname + '/assets/data/dwp.json', 'utf-8');
      data = JSON.parse(data);

  res.render('dwp/job', {
    job : data.jobs[req.params.id],
    jobString : JSON.stringify(data.jobs[req.params.id]),
    jobID : [req.params.id]
  });
});

router.get('/api/dwp/:id', function(req, res) {
  var fs = require('fs');
  var data = fs.readFileSync(__dirname + '/assets/data/dwp.json', 'utf-8');
      data = JSON.parse(data);

res.json(data.jobs[req.params.id]);
});


module.exports = router;
