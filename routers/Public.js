const router = require('express').Router();
const PublicController = require('../controllers/Public');

router.route('/').get(PublicController.homepage);
router.route('/courses').get(PublicController.coursesPage);

module.exports = router;