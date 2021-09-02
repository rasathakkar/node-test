exports.login = (req,res) => {
    //res.status(404)
    res.send('Admin login')
}

exports.addUser = (req,res) => {
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
}