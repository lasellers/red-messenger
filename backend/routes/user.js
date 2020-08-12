let express = require('express');
let router = express.Router();

const User = require('../models/user.js');
console.log(User);
//Message.init();

/* GET users listing. */
router.get('/:id', async function (req, res, next) {
    /* await db.serialize(async () => {
        await db.each(`SELECT id,name from users WHERE id=${req.param.id}`, (err, row) => {
            if (err) {
                console.error(err.message);
            }
            console.log(row);
            res.json(row);
        });
    }); */

    //return     res.send(`message get ${req.params.id}`);
    User.findOne({
        where: {id: req.params.id}
    }).then((user) => {
        console.log(user instanceof User); // true
        console.log("User:", JSON.stringify(user, null, 2));
        res.json(user);
    }).catch(err => console.error(err));

});

module.exports = router;
