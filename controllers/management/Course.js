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

module.exports = {
    create,
    list
}