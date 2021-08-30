const path = require('path')
const express = require('express')

const router = express.Router()

router.get('/',(req,res) => {
    // console.log(req);
    // console.log("At /");
    // res.sendFile(path.join(__dirname,'../index.html'))
    // res.json({msg:'Hello'})
    res.render('home',{name:['Aman','Amit','Rahul']})
})

router.get('/contact',(req,res) => {
    //res.status(404)
    res.render('contact',{isAdmin:false})
})
router.get('/services',(req,res) => {

    var data = [
        {name:'Aman',Age:21},
        {name:'Rahul',Age:32},
        {name:'Nitin',Age:12},
    ]
    //res.status(404)
    res.render('services',{data})
})
router.get('/products',(req,res) => {
    //res.status(404)
    res.render('products',{bg:"bgBlue"})
})

module.exports = router