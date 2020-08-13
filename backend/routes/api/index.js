var router = require('express').Router();

// router.use('/api', require('./api'));
router.get('/', function (req, res) {
    res.json(['message', 'messages', 'user', 'users']);
});

module.exports = router;
