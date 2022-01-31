const router = require('express').Router();
const PublicController = require('../controllers/Public');
const Authentication = require('../middlewares/Authentication');

router.route('/').get(PublicController.homepage);
router.route('/courses').get(PublicController.coursesPage);
router.route('/courses/:slug').get(PublicController.coursePage);
router.route('/courses/:slug').post(Authentication.authorization, Authentication.isStudent, PublicController.enrollCourse);

module.exports = router;