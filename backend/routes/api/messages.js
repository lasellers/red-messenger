let express = require('express');
let router = express.Router();

const Message = require('../../models/message.js');
//Message.init();

router.get('/', async function (req, res) {
    Message.findAll({order: [['updatedAt', 'DESC']]}).then((messages) => {
        //console.log(messages.every(messages => messages instanceof Message)); // true
        //console.log("All messages:", JSON.stringify(messages, null, 2));
        res.json(messages);
    }).catch(err => console.error(err));
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
