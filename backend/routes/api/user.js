let express = require('express');
let router = express.Router();

const bcrypt = require('bcrypt');

const User = require('../../models/user.js');
//Message.init();

router.get('/:id', async function (req, res, next) {
    User.findOne({
        where: {id: req.params.id}
    }).then((user) => {
        console.log("User:", JSON.stringify(user, null, 2));
        res.json(user);
    }).catch(err => console.error(err));

});

router.delete('/:id', async function (req, res, next) {
    User.destroy({
        where: {id: req.params.id}
    }).then((user) => {
        //console.log("delete User:", JSON.stringify(user, null, 2));
        res.json({'deleted': user});
    }).catch(err => console.error(err));

});

router.post('/', async function (req, res, next) {
    User.findOrCreate({
            where: {email: req.query.email},
            defaults: {
                name: req.query.name,
                email: req.query.email,
                password: await bcrypt.hash(req.query.password, 10),
                createdAt: (new Date().toDateString()),
                updatedAt: (new Date().toDateString())
            }
        }
    ).then((findOrUser) => {
        const user = findOrUser[0];
        const created = findOrUser[1];
        res.json(user);
    }).catch(err => console.error(err));
});

router.patch('/:id', async function (req, res, next) {
    User.update(
        {
            name: req.query.name,
            email: req.query.email,
            updatedAt: (new Date().toDateString())
        },
        {where: {id: req.params.id}}
    ).then((user) => {
        if (user === null || user.includes(0)) {
            User.create(
                {
                    id: req.params.id,
                    name: req.query.name,
                    createdAt: (new Date().toDateString()),
                    updatedAt: (new Date().toDateString())
                }
            ).then((user) => {
                // console.log("insert User:", JSON.stringify(user, null, 2));
                res.json(user);
            }).catch(err => console.error(err));

        } else {
            //console.log("upsert User:", JSON.stringify(user, null, 2));
            res.json({updated: user});
        }
    }).catch(err => console.error(err));

});

module.exports = router;
