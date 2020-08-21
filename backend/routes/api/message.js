let express = require('express');
let router = express.Router();

const Message = require('../../models/message.js');
//Message.init();

router.get('/:id', function (req, res) {
    Message.findOne({
        where: {id: req.params.id}
    }).then((message) => {
        //console.log("Message:", JSON.stringify(message, null, 2));
        res.json(message);
    }).catch(err => console.error(err));
});

router.delete('/:id', async function (req, res, next) {
    Message.destroy({
        where: {id: req.params.id}
    }).then((message) => {
        // console.log("delete Message:", JSON.stringify(message, null, 2));
        res.json({'deleted': message});
    }).catch(err => console.error(err));
});

router.post('/', async function (req, res, next) {
    Message.create(
        {
            title: req.query.title,
            message: req.query.message,
            userId: req.query.userId,
            repliedTo: req.query.repliedTo,
            createdAt: (new Date().toDateString()),
            updatedAt: (new Date().toDateString())
        }
    ).then((message) => {
        // console.log("insert Message:", JSON.stringify(message, null, 2));
        res.json(message);
    }).catch(err => console.error(err));
});

router.patch('/:id', async function (req, res, next) {
    Message.update(
        {
            title: req.query.title,
            message: req.query.message,
            updatedAt: (new Date().toDateString())
        },
        {where: {id: req.params.id}}
    ).then((message) => {
        if (message === null || message.includes(0)) {
            Message.create(
                {
                    id: req.params.id,
                    title: req.query.title,
                    message: req.query.message,
                    createdAt: (new Date().toDateString()),
                    updatedAt: (new Date().toDateString())
                }
            ).then((message) => {
                //console.log("insert Message:", JSON.stringify(message, null, 2));
                res.json(message);
            }).catch(err => console.error(err));

        } else {
            //console.log("upsert Message:", JSON.stringify(message, null, 2));
            res.json({updated: message});
        }
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
