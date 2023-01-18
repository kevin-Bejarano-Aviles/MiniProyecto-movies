const {validationResult} = require('express-validator')
const {request,response} = require('express')
const fielValidations = (req=request,res=response,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            message: 'Error req',
            data: {
              errors: errors.mapped(),
            },
        }); 
    }
    next()
}
module.exports = {
    fielValidations
}