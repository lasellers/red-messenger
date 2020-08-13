let express = require('express');
let router = express.Router();

const Message = require('../../models/message.js');
console.log(Message);
//Message.init();

router.get('/', async function (req, res) {
    /*await db.serialize(async () => {
        await db.all(`SELECT id,user_id,title,message FROM messages`, (err, allRows) => {
            if (err) {
                console.error(err.message);
            }
            console.log(allRows);
            res.json(allRows);
        });
    });*/

    Message.findAll().then((messages) => {
        console.log(messages.every(messages => messages instanceof Message)); // true
        console.log("All messages:", JSON.stringify(messages, null, 2));
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
