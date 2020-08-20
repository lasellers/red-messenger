// ex: $ PORT=3002 node app.js
var router = require('express').Router();

const User = require('../../models/user.js');
console.log(User);
//Message.init();

const bcrypt = require('bcrypt');

global.isLoggedIn = [];

router.get('/', function (req, res) {
    res.json(['message', 'messages', 'user', 'users', 'login', 'logout','is-logged-in']);
});

router.post('/login', async function (req, res, next) {
    console.log("/login req.query:",  req.query);
    console.log("/login req.params:",  req.params);
    console.log("/login typeof req.query.username:", typeof req.query.username);
    if(typeof req.query.username == 'undefined') {
        res.json({'isLoggedIn': false});
    }

    const username = req.query.username;
    console.log("/login username:", username);
    User.findOne({
        where: {email: username}
    }).then(async (user) => {
        console.log("/login User:", JSON.stringify(user, null, 2));
        if (user !== null) {
            const isLoggedIn = await bcrypt.compare(req.query.password, user.password);
            if (isLoggedIn) {
                const index = global.isLoggedIn.indexOf(username);
                if (index === -1) {
                    global.isLoggedIn.push(username);
                }
            }
            res.json({...user.dataValues, 'isLoggedIn': global.isLoggedIn.indexOf(username) !== -1});
        } else {
            res.json({'isLoggedIn': global.isLoggedIn.indexOf(username) !== -1});
        }
    }).catch(err => {
        console.error(err);
        res.json({'isLoggedIn': global.isLoggedIn.indexOf(username) !== -1, 'error': err.message});
    });
    //console.info('****global', global.isLoggedIn);
});

router.get('/logout', async function (req, res, next) {
    const username = req.query.username;
    const index = global.isLoggedIn.indexOf(username);
    global.isLoggedIn.splice(index, 1);
    //console.info('****username', username);
    //console.info('****index', index);
    //console.info('****global', global.isLoggedIn);
    res.json({'isLoggedIn': global.isLoggedIn.indexOf(username) !== -1});
});

router.get('/is-logged-in', async function (req, res, next) {
    const username = req.query.username;
    //console.info('****global', global.isLoggedIn);
    res.json({'isLoggedIn': global.isLoggedIn.indexOf(username) !== -1});
});

module.exports = router;
