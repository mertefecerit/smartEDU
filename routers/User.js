const router = require('express').Router();
const UserController = require('../controllers/User');
const AuthController = require('../controllers/Auth');
const Authentication = require('../middlewares/Authentication');
const ManagementCourseController = require('../controllers/management/Course');
const ManagementCategoryController = require('../controllers/management/Category');

router.get('/register',UserController.registerPage);
router.post('/register',UserController.createProcess);
router.get('/login',UserController.loginPage);
router.post('/login',AuthController.login);
router.get('/logout',AuthController.logout);

//Authorization Area
router.get('/dashboard', Authentication.authorization, UserController.dashboardPage);

router.get('/management/course', Authentication.authorization, ManagementCourseController.list);
router.post('/management/course', Authentication.authorization, ManagementCourseController.create);

router.get('/management/category', Authentication.authorization, ManagementCategoryController.list);
router.post('/management/category', Authentication.authorization, ManagementCategoryController.create);

module.exports = router;