
const express = require('express'); // importing a express mvc
var User = require('../models/user');


const router = express.Router(); //creating sub-routes


/* http://localhost:8080/user/login */

router.post('/login', (req, res) =>{
    


    
    User.findOne({username : req.body.username}, (err, data)=>{

        if(err)
            throw err;
        else if(data == null){
            res.json({message : "Username or Password invalid", status : 401});
        }

        else if(data.password != req.body.password){
            res.json({message : "Wrong Password", status : 401});
        }
        else{
            res.json(data);
        }


    })
    // if(req.body.username =='admin' && req.body.password == 'admin123'){
    //     res.send('<h1 style="color:green"> Successed Login </h1>')
    // }
    // else{

    //     res.send('<h1> Failed Login </h1>');

    // }
    // write a logic to interact with DB
});

router.post('/logout', (req, res)=>{

});

module.exports = router;