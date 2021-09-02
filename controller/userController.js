exports.home = (req,res) => {
    // console.log(req);
    // console.log("At /");
    // res.sendFile(path.join(__dirname,'../index.html'))
    // res.json({msg:'Hello'})

    var name = "Dhruv"
    var age = 21
    console.log("Hello," + name + "my age is " + age);
    console.log(`Hello, ${name} my age is ${age}`);
    res.render('home',{name:['Aman','Amit','Rahul']})
}

exports.contact = (req,res) => {
    //res.status(404)
    res.render('contact',{isAdmin:false})
}