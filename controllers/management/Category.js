const CategoryService = require('../../services/Category');
const list = async (req, res) => {
    const categories = await CategoryService.readAll();
    res.render('pages/management/category',{layout: 'layout/dashboard', categories});
}
const create = async (req, res) => {
    await CategoryService.insert(req.body);
    res.redirect('/user/management/category');
}

const deleteOne = async (req, res) => {
    await CategoryService.deleteOne(req.params.id);
    res.redirect('/user/management/category');
}

const update = async (req, res) => {
    
}

module.exports = {
    list,
    create,
    update,
    deleteOne
}