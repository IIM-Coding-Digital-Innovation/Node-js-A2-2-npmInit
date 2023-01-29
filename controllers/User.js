const { User } = require("../models/User")



const addUser = async (req) => {
    try {
        if(req.body.password!=req.body.confPassword) throw new Error('Mots de passes différents')
        await new User({ name: req.body.pseudo, mail: req.body.mail, password: req.body.password, isAdmin: false }).save()
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

// const login = async ()=>{

// }

module.exports = {
    addUser,
    getAllUsers,
    //login
}