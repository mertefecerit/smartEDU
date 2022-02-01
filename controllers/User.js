const UserService = require('../services/User');


const registerPage = (req, res) => {
    res.render('pages/user/register');
}
const loginPage = (req, res) => {
    res.render('pages/user/login');
}
const dashboardPage = async (req, res) => {
    res.render('pages/management/dashboard', {layout: 'layout/dashboard'});
}

const myCoursesPage = async (req, res) => {
    const myCourses = await UserService.getCourses(req.session.user._id);
    res.render('pages/management/courses',{layout: 'layout/dashboard', myCourses: myCourses.courses})
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
    dashboardPage,
    myCoursesPage
}