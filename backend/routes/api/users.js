let express = require('express');
let router = express.Router();

const User = require('../../models/user.js');
console.log(User);
//User.init();

router.get('/', async function (req, res) {
    /*
    db.serialize(async () => {
        db.all(`SELECT id,name FROM users ORDER BY id DESC`, (err, allRows) => {
            if (err) {
                console.error(err.message);
            }
            console.log(allRows);
            res.json(allRows);
        });
    });*/

    User.findAll({order: [['updatedAt', 'DESC']]}).then((users) => {
        console.log(users.every(users => users instanceof User)); // true
        console.log("All users:", JSON.stringify(users, null, 2));
        res.json(users);
    }).catch(err => console.error(err));

});

module.exports = router;
