const router = require('express').Router();

router.get('/usertest', (req, res) => {
    res.send('user test is successfull');
})

router.post('/userposttest', (req, res) => {
    const userName = req.body.username;
    res.json({name:userName})
})

module.exports = router