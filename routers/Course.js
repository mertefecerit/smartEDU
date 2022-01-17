const router = require('express').Router();
const CourseController = require('../controllers/Course');

router.get('/',CourseController.list);
router.get('/detail/:id',CourseController.getOne);
router.post('/', CourseController.create);
router.delete('/:id', CourseController.deleteOne);
router.put('/', CourseController.update);

module.exports = router;