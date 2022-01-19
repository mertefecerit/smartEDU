const UserService = require('../services/User');
const CategoryService = require('../services/Category');

const registerPage = (req, res) => {
    res.render('pages/user/register');
}
const loginPage = (req, res) => {
    res.render('pages/user/login');
}
const dashboardPage = async (req, res) => {
    const categories = await CategoryService.readAll();
    res.render('pages/management/dashboard', {layout: 'layout/dashboard', categories});
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
    createProcess,
    dashboardPage
}