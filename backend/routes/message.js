let express = require('express');
let router = express.Router();

const Message = require('../models/message.js');
console.log(Message);
//Message.init();

router.get('/:id', function (req, res) {
//return     res.send(`message get ${req.params.id}`);
    Message.findOne({
        where: {id: req.params.id}
    }).then((message) => {
        console.log(message instanceof Message); // true
        console.log("Message:", JSON.stringify(message, null, 2));
        res.json(message);
    }).catch(err => console.error(err));
});

router.post('/', function (req, res) {

    res.send(`message post ${req.body}`);
});

router.patch('/:id', function (req, res) {
    res.send(`message patch ${req.params.id}`)
});

router.delete('/:id', function (req, res) {
    res.send(`message delete ${req.params.id}`)
});

module.exports = router;

/*
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
 */
