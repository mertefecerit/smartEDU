const router = require('express').Router();
const ManagementCourseController = require('../controllers/management/Course');
const ManagementCategoryController = require('../controllers/management/Category');

//Course Management Routes
router.get('/course', ManagementCourseController.list);
router.post('/course', ManagementCourseController.create);

//Category Management Routes
router.get('/category', ManagementCategoryController.list);
router.get('/category/edit/:id', ManagementCategoryController.edit);
router.get('/category/delete/:id', ManagementCategoryController.deleteOne);
router.post('/category', ManagementCategoryController.create);
router.post('/category/update/:id', ManagementCategoryController.update);


module.exports = router
