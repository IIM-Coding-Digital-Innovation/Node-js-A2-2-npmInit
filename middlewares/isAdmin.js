const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports = (req,res,next)=>{
    try{
        if(jwt.verify(req.params.token, process.env.SECRET_KEY).isAdmin){
            next()
        }else{
            res.redirect('/login')
        }
    }
    catch{
        res.redirect('/login')
    }
}