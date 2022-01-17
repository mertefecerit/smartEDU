const router = require('express').Router();
const UserController = require('../controllers/User');
const AuthController = require('../controllers/Auth');

router.get('/register',UserController.registerPage);
router.post('/register',UserController.createProcess);
router.get('/login',UserController.loginPage);
router.post('/login',AuthController.login);
router.post('/logout',AuthController.logout);

module.exports = router;