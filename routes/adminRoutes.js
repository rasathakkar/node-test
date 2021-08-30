
const express = require('express')
const router = express.Router()

router.post('/addUser',(req,res) => {
    console.log(req.body);
    const email = req.body.email
    const password = req.body.password

    if(email == 'abcd' && password == '1234')
    {
        return res.json({code:'Successful'})
    }
    else {
        return res.send('<h1>Login FAILED!!</h1>')
    }
})

router.get('/login',(req,res) => {
    //res.status(404)
    res.send('Admin login')
})

module.exports = router