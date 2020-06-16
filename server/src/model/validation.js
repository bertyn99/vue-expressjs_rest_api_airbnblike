const Joi = require('joi')

//register Validation
const registerValidation = data =>{
    const schema ={
        nom : Joi.string().min(3).required(),
        prenom : Joi.string().min(3).required(),
        telephone : Joi.string().min(10).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(4).required()
    };
    return Joi.validate(data, schema)

}

//login Validation
const loginValidation = data =>{
    const schema ={
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(4).required()
    };
    return Joi.validate(data, schema)

}

module.exports.registerValidation= registerValidation;
module.exports.loginValidation= loginValidation;