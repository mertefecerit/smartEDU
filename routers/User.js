const router = require('express').Router();
const UserController = require('../controllers/User');
const AuthController = require('../controllers/Auth');
const Authentication = require('../middlewares/Authentication');

router.get('/register',UserController.registerPage);
router.post('/register',UserController.createProcess);
router.get('/login',UserController.loginPage);
router.post('/login',AuthController.login);
router.get('/logout',AuthController.logout);

router.get('/dashboard',Authentication.authorization, UserController.dashboardPage);

module.exports = router;