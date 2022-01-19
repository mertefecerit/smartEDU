const CourseService = require('../../services/Course');
const CategoryService = require('../../services/Category');
const UserService = require('../../services/User');

const list = async (req, res) => {
    let parameters = null;
    let teachers = [];
    if(req.session.user.role === 'teacher'){
        parameters = {user:req.session.user._id};
    } else {
        // if admin logged in need this query;
        teachers = await UserService.getTeachers();
    }
    try{
        const courses = await CourseService.readAll(parameters);
        const categories = await CategoryService.readAll();
        res.render('pages/management/course',{layout:'layout/dashboard', courses, categories, teachers});
    }catch(err){
        res.render(500).send('An Error Occurred. : ' + err);
    }
}

const create = async (req, res) => {
    // why we use the if statment ? Because logged in user role if teacher get user id from session data.
    // if logged in admin we already select teacher from teacher list.
    // and student logged in already can't access course management by middleware :D
    if(req.session.user.role === 'teacher'){
        // modify req.body why ? because we need user id for referance.
        req.body.user = req.session.user._id;
    }
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
    await CourseService.update(req.params.id, req.body);
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