const path = require('path')
const http = require('http')
const chalk = require('chalk')
const express = require('express')
const app = express()


app.use(express.urlencoded({extended:true}))
const PORT = 8300

// http.createServer((req,res) => {
//     console.log(req.url);
//     res.write('<html><h1>Welcome</h1></html>')
//     res.end()
//     console.log(chalk.yellow("Server Connected at PORT 8200"));
//     // console.log(req);
// }).listen(8200)

app.get('/',(req,res) => {
    // console.log(req);
    // console.log("At /");
    res.sendFile(path.join(__dirname,'index.html'))
    // res.json({msg:'Hello'})
})

app.get('/contact',(req,res) => {
    res.send('<h1>Contact US</h1>')
})

app.post('/addUser',(req,res) => {
    console.log(req.body);
    const email = req.body.email
    const password = req.body.password

    if(email == 'abcd' && password == '1234')
    {
        return res.redirect('/contact')
    }
    else {
        return res.send('<h1>Login FAILED!!</h1>')
    }
})


app.listen(PORT,(req,res) => {
    console.log(`Connected at PORT ${PORT}`);
})