const { body, validationResult } = require('express-validator');

const userRegisterVal = [
    body('email').isEmail().withMessage('Please enter valid email address'),
    body('password').isLength({min:8}).withMessage('Please enter min 8 char password'),
    
    async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        await req.flash('fail', errors);
        return res.redirect('/user/register');
    }
    next();
}]

module.exports = {
    userRegisterVal
}