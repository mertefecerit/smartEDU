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

const edit = async (req, res) => {
    const category = await CategoryService.read(req.params.id);
    res.render('pages/management/category/edit',{layout:'layout/dashboard',category});
}

const update = async (req, res) => {
    await CategoryService.update(req.body);
    res.redirect('/user/management/category');
}

module.exports = {
    list,
    edit,
    create,
    update,
    deleteOne
}