const router = require('express').Router();
const CategoryController = require('../controllers/Category');

router.get('/',CategoryController.list);
router.post('/', CategoryController.create);

module.exports = router;