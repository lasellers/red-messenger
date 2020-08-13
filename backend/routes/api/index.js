var router = require('express').Router();

const User = require('../../models/user.js');
console.log(User);
//Message.init();

const bcrypt = require('bcrypt');

global.isLoggedIn = [];

// router.use('/api', require('./api'));
router.get('/', function (req, res) {
    res.json(['message', 'messages', 'user', 'users']);
});

router.post('/login', async function (req, res, next) {
    const username = req.query.username;
    User.findOne({
        where: {email: username}
    }).then(async (user) => {
        console.log("login User:", JSON.stringify(user, null, 2));
        if (user !== null) {
            const isLoggedIn = await bcrypt.compare(req.query.password, user.password);
            if (isLoggedIn) {
                const index = global.isLoggedIn.indexOf(username);
                if (index === -1) {
                    global.isLoggedIn.push(username);
                }
            } else {
            }
            res.json({...user.dataValues, 'isLoggedIn': global.isLoggedIn.indexOf(username) !== -1});
        } else {
            res.json({'isLoggedIn': global.isLoggedIn.indexOf(username) !== -1});
        }
    }).catch(err => {
        console.error(err);
        res.json({'isLoggedIn': global.isLoggedIn.indexOf(username) !== -1});
    });
    console.info('****global', global.isLoggedIn);
});

router.get('/logout', async function (req, res, next) {
    const username = req.query.username;
    const index = global.isLoggedIn.indexOf(username);
    global.isLoggedIn.splice(index, 1);
    console.info('****username', username);
    console.info('****index', index);
    console.info('****global', global.isLoggedIn);
    res.json({'isLoggedIn': global.isLoggedIn.indexOf(username) !== -1});
});

router.get('/is-logged-in', async function (req, res, next) {
    const username = req.query.username;
    console.info('****global', global.isLoggedIn);
    res.json({'isLoggedIn': global.isLoggedIn.indexOf(username) !== -1});
});

module.exports = router;
