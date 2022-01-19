const router = require('express').Router();
const ManagementCourseController = require('../controllers/management/Course');
const ManagementCategoryController = require('../controllers/management/Category');

//Course Management Routes
router.get('/course', ManagementCourseController.list);
router.post('/course', ManagementCourseController.create);

//Category Management Routes
router.get('/category', ManagementCategoryController.list);
router.post('/category', ManagementCategoryController.create);
router.get('/category/:id', ManagementCategoryController.deleteOne);
router.post('/category/:id', ManagementCategoryController.update);


module.exports = router
