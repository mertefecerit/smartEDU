const router = require('express').Router();
const CourseController = require('../controllers/Course');

router.post('/', CourseController.create);

module.exports = router;