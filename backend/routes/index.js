var express = require('express');
var router = express.Router();

router.get('/about', function (req, res) {
    res.send('About, World!')
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
