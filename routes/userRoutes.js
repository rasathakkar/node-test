const path = require('path')
const express = require('express')
const {home,contact} = require('../controller/userController')

const router = express.Router()

router.get('/',home)

router.get('/contact',contact)


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
router.get('/item/:id',(req,res) => {
    // console.log(req.params);
    var id = req.params.num
    // //res.status(404)
    res.render('item',{id})
})

module.exports = router