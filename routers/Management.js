const router = require('express').Router();
const ManagementCourseController = require('../controllers/management/Course');
const ManagementCategoryController = require('../controllers/management/Category');
const Authentication = require('../middlewares/Authentication');

//Course Management Routes
router.get('/course', Authentication.isTeacherOrAdmin, ManagementCourseController.list);
router.get('/course/edit/:id', Authentication.isTeacherOrAdmin, ManagementCourseController.edit);
router.get('/course/delete/:id', Authentication.isTeacherOrAdmin, ManagementCourseController.deleteOne);
router.post('/course', Authentication.isTeacherOrAdmin, ManagementCourseController.create);
router.post('/course/update/:id', Authentication.isTeacherOrAdmin, ManagementCourseController.update);

//Category Management Routes
router.get('/category', Authentication.isAdmin, ManagementCategoryController.list);
router.get('/category/edit/:id', Authentication.isAdmin, ManagementCategoryController.edit);
router.get('/category/delete/:id', Authentication.isAdmin, ManagementCategoryController.deleteOne);
router.post('/category', Authentication.isAdmin, ManagementCategoryController.create);
router.post('/category/update/:id', Authentication.isAdmin, ManagementCategoryController.update);


module.exports = router
