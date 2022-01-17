const UserService = require('../services/User');

const registerPage = (req, res) => {
    res.render('pages/user/register');
}
const loginPage = (req, res) => {
    res.render('pages/user/login');
}

const createProcess = async (req, res) => {
    try{
        const NewUser = await UserService.insert(req.body);
        res.redirect('/user/login');
    }catch(err){
        res.status(400).send("An Error Occured. : " + err);
    }
}

module.exports = {
    registerPage,
    loginPage,
    createProcess
}