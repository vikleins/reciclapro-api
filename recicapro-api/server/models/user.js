const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity")

//aqui muda config do banco
const userSchema = new mongoose.Schema({
    companyName: {type: String, required: true},
    email: {type: String, required: true},
    location: {type: String, required: true},
    timeFunction: { type: String, required: true },
    description: {type: String, required: true},
    materials: { type: String, required: true },
    password: {type: String, required: true},
})

userSchema.methods.generateAuthToken = function (){
    if (!process.env.JWTPRIVATEKEY) {
        throw new Error("JWTPRIVATEKEY não definida no arquivo .env");
    }
    const token = jwt.sign({id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    return token
}

const User = mongoose.model("user", userSchema)

const validate = (data) =>{
    const schema = Joi.object({
        companyName: Joi.string().required().label("Company Name"),
        email: Joi.string().email().required().label("Email"),
        location: Joi.string().required().label("Location"),
        timeFunction: Joi.string().required().label("Time Function"),
        description: Joi.string().required().label("Description"),
        materials: Joi.string().required().label("Materials"),
        password: passwordComplexity().required().label("Password"),
    })

    return schema.validate(data)
}

module.exports = {User, validate}