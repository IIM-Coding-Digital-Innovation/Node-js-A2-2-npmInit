const { default:mongoose } = require("mongoose")
const validator = require("validator")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mail:{
        type: String,
        required: true,
        validate(mail){
            if(!validator.isEmail(mail)) throw new Error('Entrez une adresse mail valide')
        }
    },
    password: {
        type: String,
        required: true,
        validate(pass){
            if(!validator.isLength(pass, {min:6, max:undefined})) throw new Error('Le mot de passe doit faire au moins six caractères')
        }
    },
    isAdmin: Boolean
})

const User = mongoose.model('User', UserSchema)

module.exports = { User };