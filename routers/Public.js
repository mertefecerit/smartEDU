const router = require('express').Router();
const PublicController = require('../controllers/Public');

router.route('/').get(PublicController.homepage);

module.exports = router;