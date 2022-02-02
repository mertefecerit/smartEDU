const router = require('express').Router();
const UserController = require('../controllers/User');
const AuthController = require('../controllers/Auth');
const Authentication = require('../middlewares/Authentication');
const Validator = require('../middlewares/Validator');

router.get('/register',Authentication.isLoggedIn, UserController.registerPage);
router.post('/register',Authentication.isLoggedIn, Validator.userRegisterVal, UserController.createProcess);
router.get('/login', Authentication.isLoggedIn, UserController.loginPage);
router.post('/login',Authentication.isLoggedIn, AuthController.login);
router.get('/logout',AuthController.logout);

//Authorization Area
router.get('/dashboard', Authentication.authorization, UserController.dashboardPage);
router.get('/courses',Authentication.authorization, Authentication.isStudent, UserController.myCoursesPage);

module.exports = router;