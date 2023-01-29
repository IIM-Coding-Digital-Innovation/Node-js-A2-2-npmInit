const { User } = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
require('dotenv').config();

const addUser = async (req) => {
    try {
        if (req.body.password != req.body.confPassword) throw new Error('Mots de passes différents')

        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(req.body.password, salt);

        await new User({ name: req.body.pseudo, mail: req.body.mail, password: hashedPassword, isAdmin: false }).save()
    } catch (error) {
        return [400, error]
    }
    return [200, "FAIT"]
}

const getAllUsers = async () => {

    return User.find({}
        , {
            "name": 1,
            "mail": 1
        }
    )
}

const login = async (req) => {

    //console.log(req.body)

    let UserInfos = await User.find({
        "mail": req.body.mail
    })
    if(!UserInfos.length){
        return [401, "Mauvais identifiants"]
    }
    let compare = await bcrypt.compare(req.body.password, UserInfos[0].password)
    if(compare){
        let info = {
            name : UserInfos[0].name,
            mail : UserInfos[0].mail,
            isAdmin : UserInfos[0].isAdmin,
            id: UserInfos[0]._id
        }
        return [200, jwt.sign(info, process.env.SECRET_KEY, {expiresIn: '24h'})]
    }
    return [401, "Mauvais identifiants"]
}

const verif = (req, res)=>{
    res.status(200).json({message : 'Bonjour '+req.token.name})
}

module.exports = {
    addUser,
    getAllUsers,
    login,
    verif
}