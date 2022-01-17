const router = require('express').Router();
const CourseController = require('../controllers/Course');

router.post('/add', CourseController.create);

module.exports = router;