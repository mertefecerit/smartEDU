const router = require('express').Router();
const CategoryController = require('../controllers/Category');

router.get('/',CategoryController.list);
router.get('/:slug',CategoryController.getOneAndRelations);
router.post('/', CategoryController.create);

module.exports = router;