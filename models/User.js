const { default:mongoose } = require("mongoose")
const validator = require("validator")
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Un pseudo est requis"],
        unique: true
    },
    mail:{
        type: String,
        required: true,
        unique: true,
        validate(mail){
            if(!validator.isEmail(mail)) throw new Error('Entrez une adresse mail valide')
        }
    },
    password: {
        type: String,
        required: [true, "Un mot de passe est requis"],
        validate(pass){
            if(!validator.isLength(pass, {min:6, max:undefined})) throw new Error('Le mot de passe doit faire au moins six caractères')
        }
    },
    isAdmin: Boolean,
    
})

UserSchema.plugin(uniqueValidator, { message: '{PATH} existe déjà' })

const User = mongoose.model('User', UserSchema)


module.exports = { User };