const jwt = require('jsonwebtoken')
require('dotenv').config();


module.exports = (req,res,next)=>{
    try{
        let token
        if(req.params.token){
            token = req.params.token
        }else{
            token = req.headers.authorization.split(' ')[1];
        }
        req.token = jwt.verify(token, process.env.SECRET_KEY)
        next()
    }
    catch{
        res.redirect('/login')
    }
}