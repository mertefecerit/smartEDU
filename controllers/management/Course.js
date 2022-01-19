const CourseService = require('../../services/Course');
const CategoryService = require('../../services/Category');

const list = async (req, res) => {
    try{
        const courses = await CourseService.readAll();
        const categories = await CategoryService.readAll();
        res.render('pages/management/course',{layout:'layout/dashboard', courses, categories});
    }catch(err){
        res.render(500).send('An Error Occurred. : ' + err);
    }
}

const create = async (req, res) => {
    try{
        await CourseService.insert(req.body);
        res.redirect('/user/management/course');
    }catch(err){
        res.render(500).send('An Error Occurred. : ' + err);
    }
}

const deleteOne = async (req, res) => {
    await CourseService.deleteOne(req.params.id);
    res.redirect('/user/management/course');
}
const update = async (req, res) => {
    await CourseService.update(req.body);
    res.redirect('/user/management/course');
}
const edit = async (req, res) => {
    const categories = await CategoryService.readAll();
    const course = await CourseService.read(req.params.id);
    res.render('pages/management/course/edit',{layout:'layout/dashboard',course, categories});
}

module.exports = {
    create,
    list,
    deleteOne,
    update,
    edit
}