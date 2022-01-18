const CategoryService = require('../../services/Category');
const list = async (req, res) => {
    const categories = await CategoryService.readAll();
    res.render('pages/management/category',{layout: 'layout/dashboard', categories});
}
const create = async (req, res) => {
    try{
        await CategoryService.insert(req.body);
        res.redirect('/user/management/category');
    }catch(err){
        res.render(400).send('An Error Occurred. : ' + err);
    }
}

module.exports = {
    list,
    create
}