const express = require('express')
const app = express()
const path = require('path')
const PORT = 8300

const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',userRoutes)
app.use('/admin',adminRoutes)


app.get('*',(req,res) => {
    res.send('<h1>Other routes</h1>')
})

app.listen(PORT,(req,res) => {
    console.log(`Connected at PORT ${PORT}`);
})