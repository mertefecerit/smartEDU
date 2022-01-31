const router = require('express').Router();
const PublicController = require('../controllers/Public');

router.route('/').get(PublicController.homepage);
router.route('/courses').get(PublicController.coursesPage);
router.route('/courses/:slug').get(PublicController.coursePage);

module.exports = router;